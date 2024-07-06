'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

const Comments = ({ token, pathname }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.post("http://localhost:4144/api/comments/get", { pathname }, { headers: { "Content-Type": "application/json" } });
        setComments(response.data.rows);
      } catch (err) {
        throw new Error(`Não foi possível recuperar os comentários: ${err}`);
      }
    };

    fetchComments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      throw new Error("Você precisa estar logado para comentar!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4144/api/comments/create", { comment: newComment, pathname }, { headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` } });
      setComments([response.data.result, ...comments]);
      setNewComment('');
    } catch (err) {
      throw new Error(`Erro ao postar comentário: ${err}`);
    }
  };

  return (
    <div className="comments-section">
      <h2 className="text-2xl font-bold text-inmetro mb-4">Comentários</h2>
      <div className="comments-list mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="comment mb-4 p-4 border rounded border-secondary-dark">
            <span className="text-sm text-secondary-light">{comment.username}</span>
            <p className="text-secondary-dark">{comment.comment}</p>
            <span className="text-sm text-secondary-light">{dayjs().to(comment.createdat)}</span>
          </div>
        ))}
      </div>
      {token ? (
        <form onSubmit={handleSubmit} className="comment-form mb-">
          <textarea
            className="w-full p-2 border rounded mb-2 border-secondary-dark text-secondary-light"
            rows="4"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Deixe seu comentário..."
          />
          <button type="submit" className="px-4 py-2 text-[1.075rem] bg-secondary border-2 border-secondary font-semibold text-white rounded-md hover:bg-secondary-dark hover:border-secondary-dark transition duration-500">
            Comentar
          </button>
        </form>
      ) : (
        <p className="text-secondary-light">Você precisa estar logado para deixar um comentário.</p>
      )}
    </div>
  );
};

export default Comments;

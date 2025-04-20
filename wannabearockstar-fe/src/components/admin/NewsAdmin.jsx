import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:8080/api/news";

function NewsAdmin() {
  const [newsList, setNewsList] = useState([]);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [editingId, setEditingId] = useState(null);

  const fetchNews = async () => {
    const res = await axios.get(API_URL);
    setNewsList(res.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { text, date };
    if (editingId) {
      await axios.put(`${API_URL}/${editingId}`, payload);
    } else {
      await axios.post(API_URL, payload);
    }
    setText('');
    setDate('');
    setEditingId(null);
    fetchNews();
  };

  const handleEdit = (news) => {
    setText(news.text);
    setDate(news.date);
    setEditingId(news.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNews();
  };

  return (
    <div>
      <h2>News Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="News text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {newsList.map((n) => (
          <li key={n.id}>
            {n.date} — {n.text}
            <button onClick={() => handleEdit(n)}>Edit</button>
            <button onClick={() => handleDelete(n.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsAdmin;

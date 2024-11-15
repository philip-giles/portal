// pages/index.js
import Link from 'next/link';
import styles from '../styles/styles.css'; // Ensure correct path for your CSS file

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Your Investor Portal</h1>
      <p>
        Manage your hedge fund investments with ease and insight. Login to access your portfolio and transaction details.
      </p>
      <Link href="/login">
        <a className="login-button">Login</a>
      </Link>
    </div>
  );
}
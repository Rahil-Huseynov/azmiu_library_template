import { useState } from "react";
import logo from "../assets/8f061feb6f9876d9bc40e7ef1a42970a.webp";
import "./Home.css";

const Home: React.FC = () => {
  const [formData, setFormData] = useState<{ username: string; password: string }>({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newErrors: { username?: string; password?: string } = {};

    if (!formData.username.trim()) {
      newErrors.username = "İstifadəçi adı boş ola bilməz.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Şifrə boş ola bilməz.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Daxil edilmiş məlumatlar:", formData);
  };

  return (
    <div className="container_home">
      <div className="container_home_item">
        <div className="left_section">
          <img src={logo} alt="logo" className="arrow_icon" />
          <p className="university_name">Azərbaycan Memarlıq və İnşaat Universiteti</p>
          <p className="sisteme_giris_item">Sİstemə gİrİş</p>

          <form className="input_container" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="İstifadəçi adı"
              className={`input_field ${errors.username ? "input_error" : ""}`}
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error_message">{errors.username}</p>}

            <input
              type="password"
              name="password"
              placeholder="Şifrə"
              className={`input_field ${errors.password ? "input_error" : ""}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error_message">{errors.password}</p>}

            <button type="submit" className="button-17">
              Giriş Et
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

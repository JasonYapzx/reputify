USE mysql_db;

CREATE TABLE IF NOT EXISTS posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  content TEXT,
  token VARCHAR(255) NOT NULL,
  timeframe INTEGER NOT NULL, -- seconds time delta 
  prediction_value DECIMAL(10, 2),
  prediction_sign TINYINT,             -- Assuming 1 for positive, 0 for neutral, and -1 for negative predictions
  post_reputation INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);
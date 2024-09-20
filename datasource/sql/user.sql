USE mysql_db;

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    wallet_address TEXT NOT NULL,
    created_at INT NOT NULL,
    updated_at INT NOT NULL,
    reputation INT DEFAULT 0
);

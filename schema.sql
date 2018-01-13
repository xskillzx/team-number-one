-- ---
-- Globals
-- ---
DROP DATABASE IF EXISTS squeaker;

CREATE DATABASE squeaker;

USE squeaker;
-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;
-- ---
-- Table 'Users'
-- 
-- ---
DROP TABLE IF EXISTS `users`;
        
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  `display_name` VARCHAR(40) NOT NULL,
  `bio_text` VARCHAR(255),
  `profile_img_url` VARCHAR(200),
  `banner_img_url` VARCHAR(200),
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'squeaks'
-- 
-- ---
DROP TABLE IF EXISTS `squeaks`;
        
CREATE TABLE `squeaks` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `text` VARCHAR(70) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT now(),
  `resqueak_id` INTEGER NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'users_squeaks'
-- 
-- ---
DROP TABLE IF EXISTS `users_squeaks`;
        
CREATE TABLE `users_squeaks` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `squeak_id` INTEGER NOT NULL,
  `is_liked` BINARY NOT NULL DEFAULT '0',
  `is_favorited` BINARY NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'replies'
-- 
-- ---
DROP TABLE IF EXISTS `replies`;
        
CREATE TABLE `replies` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `squeak_id` INTEGER NOT NULL,
  `user_id` INTEGER NOT NULL,
  `text` VARCHAR(70) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'follows'
-- 
-- ---
DROP TABLE IF EXISTS `follows`;
        
CREATE TABLE `follows` (
  `follower_id` INTEGER NOT NULL,
  `followed_id` INTEGER NOT NULL,
  PRIMARY KEY (`follower_id`, `followed_id`)
);
-- ---
-- Foreign Keys 
-- ---
ALTER TABLE `squeaks` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `squeaks` ADD FOREIGN KEY (resqueak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `users_squeaks` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `users_squeaks` ADD FOREIGN KEY (squeak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `replies` ADD FOREIGN KEY (squeak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `replies` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `follows` ADD FOREIGN KEY (follower_id) REFERENCES `users` (`id`);
ALTER TABLE `follows` ADD FOREIGN KEY (followed_id) REFERENCES `users` (`id`);
-- ---
-- Table Properties
-- ---
-- ALTER TABLE `Users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `squeaks` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_squeaks` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `replies` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `follows` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ---
-- Test Data
-- ---
INSERT INTO `users` (`username`,`display_name`,`bio_text`,`profile_img_url`,`banner_img_url`) VALUES
('shockway','Moises Munoz','Im big and tall and win it all.. my mom loves me','https://i.pinimg.com/736x/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864--facebook-profile-profile-pictures.jpg','https://i.pinimg.com/564x/d7/9e/0b/d79e0b1db7d93379c3f893e00c2d51ed.jpg'), ('Chestnutt da Bestnutt','Henry Chestnutt','This beard, you like?','http://4.bp.blogspot.com/-OfEfbyWGCg0/Vfh9WpUu6HI/AAAAAAAABHk/U28qdodeMuM/s1600/henry-cavill-by-patrik-giardino-for-men-s-health-magazine-september-2015-issue_08.jpg','https://i.pinimg.com/564x/87/6f/5b/876f5b43e487624f77a5efee8977307c.jpg'), ('J.Y.','Justin Yoo','You think you can keep up? PUH-LEES','https://s-media-cache-ak0.pinimg.com/originals/1c/7d/81/1c7d8155812aa3a770b93af5ab282413.jpg','https://i.pinimg.com/564x/77/16/51/771651478e08aa05468869af275fda9f.jpg'), ('F to da C','Felipe Catania','Brb learning a new technology in 5 minutes','https://i.pinimg.com/736x/3f/08/d6/3f08d6f20a359e59325de91aa1da433e--hot-beards-face-hair.jpg','https://i.pinimg.com/564x/b3/9f/d8/b39fd8fd5ac2e8c25938e2fd1783d016.jpg');
INSERT INTO `squeaks` (`user_id`,`text`) VALUES
('1','DID THIS WORK?!'), ('2', 'Hi mom!');
-- INSERT INTO `users_squeaks` (`id`,`user_id`,`squeak_id`,`is_liked`,`is_favorited`) VALUES
-- ('','','','','');
INSERT INTO `replies` (`squeak_id`,`user_id`,`text`) VALUES
('1','1','YES I THINK SO!!');
-- INSERT INTO `follows` (`id`,`follower_id`,`followed_id`) VALUES
-- ('','','');
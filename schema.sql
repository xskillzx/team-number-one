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
  `profile_img_url` VARCHAR(100),
  `banner_img_url` VARCHAR(100),
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
  `created_at` DATETIME DEFAULT NULL,
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
  `created_at` DATETIME DEFAULT NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Table 'follows'
-- 
-- ---
DROP TABLE IF EXISTS `follows`;
        
CREATE TABLE `follows` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `follower_id` INTEGER NOT NULL,
  `followed_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);
-- ---
-- Foreign Keys 
-- ---
ALTER TABLE `squeaks` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `squeaks` ADD FOREIGN KEY (resqueak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `users_squeaks` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `users_squeaks` ADD FOREIGN KEY (squeak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `replies` ADD FOREIGN KEY (squeak_id) REFERENCES `squeaks` (`id`);
ALTER TABLE `replies` ADD FOREIGN KEY (user_id) REFERENCES `Users` (`id`);
ALTER TABLE `follows` ADD FOREIGN KEY (follower_id) REFERENCES `Users` (`id`);
ALTER TABLE `follows` ADD FOREIGN KEY (followed_id) REFERENCES `Users` (`id`);
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
-- INSERT INTO `Users` (`id`,`username`,`display_name`,`bio_text`,`profile_img_url`,`banner_img_url`) VALUES
-- ('','','','','','');
-- INSERT INTO `squeaks` (`id`,`user_id`,`text`,`created_at`,`resqueak_id`) VALUES
-- ('','','','','');
-- INSERT INTO `users_squeaks` (`id`,`user_id`,`squeak_id`,`is_liked`,`is_favorited`) VALUES
-- ('','','','','');
-- INSERT INTO `replies` (`id`,`squeak_id`,`user_id`,`text`,`created_at`) VALUES
-- ('','','','','');
-- INSERT INTO `follows` (`id`,`follower_id`,`followed_id`) VALUES
-- ('','','');
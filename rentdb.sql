-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for rentify
CREATE DATABASE IF NOT EXISTS `rentify` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rentify`;

-- Dumping structure for table rentify.logintables
CREATE TABLE IF NOT EXISTS `logintables` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `lastName` varchar(50) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `emailId` varchar(50) NOT NULL,
  `phoneNumber` bigint NOT NULL,
  `type` enum('SELLER','BUYER') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rentify.logintables: ~2 rows (approximately)
REPLACE INTO `logintables` (`userId`, `lastName`, `firstName`, `password`, `emailId`, `phoneNumber`, `type`, `createdAt`, `updatedAt`) VALUES
	(2, 'Raturi', 'Ujjwal', '$2b$10$0ELOGbDXVTns4nUebBm6h.QTrYuhpMOi468y8bKMBjR.U6wSSnL2.', 'ujjwalraturi248001@gmail.com', 8533859704, 'BUYER', '2024-05-24 14:12:24', '2024-05-24 14:12:24'),
	(3, 'Raturi', 'Ujjwal', '$2b$10$FAu7mZS.FxcaNXDuQunJUOt7/dUMWxJLZUXqSj5J2Pbc1qzL4QoxS', 'a@b', 8533859704, 'SELLER', '2024-05-24 15:14:31', '2024-05-24 15:14:31');

-- Dumping structure for table rentify.propertytables
CREATE TABLE IF NOT EXISTS `propertytables` (
  `propertyId` int NOT NULL AUTO_INCREMENT,
  `propertyTitle` varchar(255) NOT NULL,
  `propertyOwnerId` int NOT NULL DEFAULT '0',
  `propertyOwnerName` varchar(255) NOT NULL,
  `propertyOwnerContactPhoneNumber` bigint DEFAULT NULL,
  `propertyOwnerContactEmail` varchar(255) DEFAULT NULL,
  `propertyType` enum('APARTMENT','VILLA','FARMHOUSE','STUDIO','PENTHOUSE','PG') DEFAULT NULL,
  `price` int NOT NULL,
  `address` varchar(255) NOT NULL,
  `nearbyLandmark` varchar(255) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `bedroomCount` int DEFAULT NULL,
  `nearbyCollegeDistance` int DEFAULT NULL,
  `nearbyHospitalDistance` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`propertyId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table rentify.propertytables: ~2 rows (approximately)
REPLACE INTO `propertytables` (`propertyId`, `propertyTitle`, `propertyOwnerId`, `propertyOwnerName`, `propertyOwnerContactPhoneNumber`, `propertyOwnerContactEmail`, `propertyType`, `price`, `address`, `nearbyLandmark`, `city`, `bedroomCount`, `nearbyCollegeDistance`, `nearbyHospitalDistance`, `createdAt`, `updatedAt`) VALUES
	(1, 'Luxury farmhouse', 3, 'John Doe', 1234567890, 'john@example.com', 'FARMHOUSE', 5000, '123 Main Street', 'Near Park', 'kolkata', 4, 2, 1, '2024-05-24 14:24:35', '2024-05-24 16:25:54'),
	(3, 'new', 3, 'Ujjwal Raturi', 8533859704, 'a@b', 'VILLA', 1, 'qw', 'qq', 'delhi', 1, 11, 1, '2024-05-24 15:41:21', '2024-05-24 15:41:21');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

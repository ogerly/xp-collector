-- phpMyAdmin SQL Dump
-- version 4.9.7deb1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 19. Nov 2021 um 17:24
-- Server-Version: 8.0.27-0ubuntu0.21.04.1
-- PHP-Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `demo_db`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Auszeichnung`
--

CREATE TABLE `Auszeichnung` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Burgen`
--

CREATE TABLE `Burgen` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Burgen`
--

INSERT INTO `Burgen` (`id`, `node_text`) VALUES
(1, 'Alsbacher Schloss'),
(2, 'Auerbacher Schloss');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Menschen`
--

CREATE TABLE `Menschen` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Menschen`
--

INSERT INTO `Menschen` (`id`, `node_text`) VALUES
(1, 'Michael Jackson'),
(13, 'Leonardo da Vinci'),
(14, 'Ulf Gebhardt'),
(15, 'sdffdff');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Organisation`
--

CREATE TABLE `Organisation` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Organisation`
--

INSERT INTO `Organisation` (`id`, `node_text`) VALUES
(1, 'Vatikan');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Rassen`
--

CREATE TABLE `Rassen` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Rassen`
--

INSERT INTO `Rassen` (`id`, `node_text`) VALUES
(1, 'Anunaki');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `Schiffe`
--

CREATE TABLE `Schiffe` (
  `id` int UNSIGNED NOT NULL,
  `node_text` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `Schiffe`
--

INSERT INTO `Schiffe` (`id`, `node_text`) VALUES
(1, 'Titanic');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `_CONNECTIONS`
--

CREATE TABLE `_CONNECTIONS` (
  `id` int NOT NULL,
  `table1` varchar(25) NOT NULL,
  `node1_id` int NOT NULL,
  `table2` varchar(25) NOT NULL,
  `node2_id` int NOT NULL,
  `edge` varchar(25) NOT NULL,
  `edge_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `_EDGES`
--

CREATE TABLE `_EDGES` (
  `id` int NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Daten für Tabelle `_EDGES`
--

INSERT INTO `_EDGES` (`id`, `name`) VALUES
(1, 'erhalten'),
(2, 'mitglied'),
(3, 'geboren'),
(11, 'gestorben');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `Auszeichnung`
--
ALTER TABLE `Auszeichnung`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `Burgen`
--
ALTER TABLE `Burgen`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `Menschen`
--
ALTER TABLE `Menschen`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `Organisation`
--
ALTER TABLE `Organisation`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `Rassen`
--
ALTER TABLE `Rassen`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `Schiffe`
--
ALTER TABLE `Schiffe`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `_CONNECTIONS`
--
ALTER TABLE `_CONNECTIONS`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `_EDGES`
--
ALTER TABLE `_EDGES`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `Auszeichnung`
--
ALTER TABLE `Auszeichnung`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `Burgen`
--
ALTER TABLE `Burgen`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `Menschen`
--
ALTER TABLE `Menschen`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT für Tabelle `Organisation`
--
ALTER TABLE `Organisation`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `Rassen`
--
ALTER TABLE `Rassen`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `Schiffe`
--
ALTER TABLE `Schiffe`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT für Tabelle `_CONNECTIONS`
--
ALTER TABLE `_CONNECTIONS`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT für Tabelle `_EDGES`
--
ALTER TABLE `_EDGES`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--

ALTER TABLE `vclub_ad` ADD `weight` int NOT NULL DEFAULT 1;

ALTER TABLE `moderators` ADD `disable_vclub_ad` tinyint NOT NULL DEFAULT 0;

--//@UNDO
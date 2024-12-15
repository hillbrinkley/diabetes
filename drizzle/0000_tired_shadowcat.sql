CREATE TABLE `bloodsugar` (
	`id` text PRIMARY KEY NOT NULL,
	`number` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `carbs` (
	`id` text PRIMARY KEY NOT NULL,
	`number` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `insulin` (
	`id` text PRIMARY KEY NOT NULL,
	`number` text NOT NULL,
	`type` text NOT NULL,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);

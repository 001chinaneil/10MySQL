//MySQL 笔记
/*
* 1.WAMP，MySQL就是一款数据库软件
* 2.最常用的引擎是支持数据库事务的InnoDB。
* 3.Sequel Pro是一款管理数据库软件的MAC版客户端。在query里面写入查询命令。
* */

/*
* 1.show variables like '%char%';
* */

/*
* 1.创建表常见的2种方式:
*   a. create table class(cid int not null auto_increment primary key,
*      caption varchar(32) not null)engine=innodb default charset=utf8;
*   b. 一个自增，一个不自增；一个整数，一个字符串；
* */
create database weather;
use weather;
create table user(
	id int,
    name varchar(30) not null,
    email varchar(30) not null,
    location varchar(30) not null,
    password varchar(15) not null,
    PRIMARY KEY (id)
);
insert into user
values (101,"sivalalitha","727721euit151@skcet.ac.in","Madurai","lalli@2004"),
(102,"vedhavarsini","727721euit175@skcet.ac.in","Salem","varshu2004");
create table city(
	c_id int,
    city_name varchar(40) not null,
    pincode int not null,
    geo_coord varchar(10) not null,
    PRIMARY KEY (c_id)
);
alter table city
modify column geo_coord varchar(30);
insert into city
values (201,'Madurai',625011,"9.9252° N, 78.1198° E"),
(202,'Salem',637505,"11.6643° N, 78.1460° E");
create table date(
	d_id int,
    date date,
    c_id int,
    primary key (d_id),
    foreign key (c_id) references city(c_id)
);
insert into date
values (301,19/05/2023,201),
(302,21/05/2023,202);
create table time(
	t_id int,
    time varchar(10),
    d_id int,
    primary key (t_id),
    foreign key (d_id) references date(d_id)
    );
insert into time
values (401,'4:00',301),
(402,'6:00',302);
create table precipitation(
	p_id int,
    p_val int,
    t_id int,
    primary key (p_id),
    foreign key (t_id) references time(t_id)
);
insert into precipitation
values (11,20,401),
(12,10,402);
show tables from weather;
create table humidity(
	h_id int,
    hval int,
    t_id int,
    primary key (h_id),
    foreign key (t_id) references time(t_id)
);
insert into humidity
values (21,10,401),
(22,18,402);
create table visibility(
	v_id int,
    v_km int,
    t_id int,
    primary key (v_id),
    foreign key (t_id) references time(t_id)
);
insert into visibility
values (31,4,401),
(32,5,402);
create table windspeed(
	ws_id int,
    ws_kmh int,
    ws_s int,
    t_id int,
    primary key (ws_id),
    foreign key (t_id) references time(t_id)
);
insert into windspeed
values (41,20,12,401),
(42,30,10,402);
create table winddirection(
	ws_id int,
    wd_dir int,
    t_id int,
    primary key (ws_id),
    foreign key (t_id) references time(t_id)
);
insert into winddirection
values (51,90,401),
(52,0,402);
create table temperature(
	tem_id int,
    tem_c int,
    t_id int,
    primary key (tem_id),
    foreign key (t_id) references time(t_id)
);
insert into temperature
values (61,32,401),
(62,30,402);
create table description(
	ds_id int,
    description varchar(30),
    tem_id int,
    primary key (ds_id),
    foreign key (tem_id) references temperature (tem_id)
);
insert into description
values (91,'Sunny',61),
(92,'cloudy',62);
create table disaster(
	dis_id int,
    disaster varchar(30),
    ws_id int,
    primary key (dis_id),
    foreign key (ws_id) references windspeed(ws_id)
);
insert into disaster
values (81,'Tornado',41),
(82,'Tsunami',41);
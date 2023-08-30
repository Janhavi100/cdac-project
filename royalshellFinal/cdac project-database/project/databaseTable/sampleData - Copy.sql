INSERT INTO id_proof(type) VALUES ('aadharCard');
INSERT INTO id_proof(type) VALUES ('voterId');
INSERT INTO id_proof(type) VALUES ('panCard');
INSERT INTO id_proof(type) VALUES ('drivingLicence');


INSERT INTO users(first_name, last_name, email, password, idproof, gender, role, mobile, address, city, state, zipcode) VALUES ('sachin','sangde', 'sachin@test.com', 1234, 2, 'male', 'admin', 1234567890, 'Pune', 'Pune', 'Maharashtra', 410019);
INSERT INTO users(first_name, last_name, email, password, idproof, gender, role, mobile, address, city, state, zipcode) VALUES ('janhavi','shinde', 'janhavi@test.com', 1234, 3, 'female', 'admin', 1234543234, 'Nanded', 'Nanded', 'Maharashtra', 413007);
INSERT INTO users(first_name, last_name, email, password, idproof, gender, role, mobile, address, city, state, zipcode) VALUES ('user','user', 'user@test.com', 1234, 4, 'male', 'user', 7038200015, 'pune', 'pune', 'Maharashtra', 413521);
INSERT INTO users(first_name, last_name, email, password, idproof, gender, role, mobile, address, city, state, zipcode) VALUES ('user1','user1', 'user1@test.com', 1234, 4, 'male', 'user', 7038200015, 'pune', 'pune', 'Maharashtra', 413521);


INSERT INTO facility(title, description) VALUES ('Breakfast', 'The hotel restaurant with both indoor and outdoor seating offers an open-buffet breakfast and is directly accessible from guestroom corridors.');
INSERT INTO facility(title, description) VALUES ('Internet Access', 'StarGateway Holiday Home & Suites offers free Internet access. High-speed wireless Internet connection is complimentary both in the rooms and public areas.');
INSERT INTO facility(title, description) VALUES ('Business Centre', 'StarGateway Holiday Home & Suites provides significant services for a flawless business-travel experience. The hotels business centre is designated to meet all your business travel needs and available to assist you with all office services such as scanning and emailing documents, fax services, photocopying, printing and offices supplies.');
INSERT INTO facility(title, description) VALUES ('Parking', 'StarGateway Holiday Home & Suites offers 24-hour indoor parking for its guests. The hotel is directly accessible from the indoor car park and guests can easily reach the shopping mall by using the elevators that are facing the car park hotel entrance. The indoor parking and valet services are free for accommodating hotel guests. Car washing service is also available with an additional cost.');
INSERT INTO facility(title, description) VALUES ('Relaxation Devices', 'After a long flight, a stressful day of meetings, or just the unpleasantness of jetlag, guests want to relax when they’re in a hotel room. Why not offer a little something extra to help your guests clear their minds? Think of what you like most about a spa: calming music, good aromatics, maybe even a massage. How can you replicate a spa-like experience in your guestrooms? Scent diffusers, soothing eye pillows, and noise machines are relatively inexpensive and easy to implement, so adding relaxation devices to your room amenities is certainly not a stressful task. If you want to deliver a truly unforgettable in-room relaxation station, consider adding a Myostorm massage ball, a unique product that was recently featured on Shark Tank. Other massage options include a foot massager or a neck massager, like these from Homedics.');
INSERT INTO facility(title, description) VALUES ('Bathrobes and slippers', 'Ready to take things to the next level? Many hotels now offer elevated amenities to better compete with vacation rentals. If your hotel is located in a market with a lot of competition from Airbnb - or if you’re just looking to grab a competitive edge - consider making these amenities available');
INSERT INTO facility(title, description) VALUES ('Gym or fitness center', 'Today’s guest doesn’t want to sacrifice their workout routine on the road, so even if your hotel doesn’t have its own fitness center, guests will appreciate discounted rates (or, even better, free classes or gym time) at a nearby fitness facility.');
INSERT INTO facility(title, description) VALUES ('Powerbank for the Road', 'Imagine you just got off a long flight, pulled up Google Maps to find your hotel, and completed mobile check-in. How terrible would it be to find that all that smartphone use drained your battery and you can’t take photos of your beautiful hotel room! Give travelers a much-appreciated (and unexpected!) amenity by offering power banks in the room or for rent at the front desk. As a bonus, you could encourage guests to post something about your hotel on social media in exchange for using a power bank! Or, for an over-the-top welcome gift, give guests a complimentary, hotel-branded power bank to take home.');


INSERT INTO room_category(title, description) VALUES ('Single Room', 'A single room has one single bed for single occupancy. An additional bed (called extra bed) may be added to this room at the request of a guest and charged accordingly. The size of the bed is normally 3 feet by 6 feet. Mostly, the charge for a single room is occupied by one person.');
INSERT INTO room_category(title, description) VALUES ('Twin Room', 'A twin room has two single beds for double occupancy. An extra bed may be added to this room at the request of a guest and charged accordingly. Here the bed size is normally 3 feet by 6 feet. These rooms are suitable for sharing accommodation among a group of delegates of meeting.');
INSERT INTO room_category(title, description) VALUES ('Double Room', 'A double room has one double bed for double occupancy. An extra bed may be added to this room at the request of a guest and charged accordingly. The size of the double bed is generally 4.5 feet by 6 feet.');
INSERT INTO room_category(title, description) VALUES ('TRIPLE ROOM', 'A triple room has three separate single beds and can be occupied by three guests. This type of room is suitable for groups and delegates of meetings and conferences.'); 
INSERT INTO room_category(title, description) VALUES ('QUAD ROOM', 'A quad room has four separate single beds and can accommodate four persons together in the same room.');
INSERT INTO room_category(title, description) VALUES ('HOLLYWOOD TWIN ROOM', 'A Hollywood twin room has two single beds with a common headboard. This hotel room type is generally occupied by two guests.');
INSERT INTO room_category(title, description) VALUES ('DOUBLE-DOUBLE ROOM', 'A double-double room has two double beds and is normally preferred by a family or group as it can accommodate four persons together.');
INSERT INTO room_category(title, description) VALUES ('KING ROOM', 'A king room has a king-size bed. The size of the bed is 6 feet by 6 feet. An extra bed may be added to this room at the request of a guest and charged accordingly.');
INSERT INTO room_category(title, description) VALUES ('QUEEN ROOM', 'A queen room has a queen-size bed. The size of the bed is 5 feet by 6 feet. An extra bed may be added to this room at the request of a guest and charged accordingly.');
INSERT INTO room_category(title, description) VALUES ('INTERCONNECTING ROOM', 'Interconnecting rooms have a common wall and a door that connects the two rooms. This allows guests to access any of the two rooms without passing through a public area. This type of hotel room is ideal for families and crew members in a 5-star hotel.');
INSERT INTO room_category(title, description) VALUES ('CABANA ROOM', 'A Cabana is situated away from the main hotel building, in the vicinity of a swimming pool or sea beach. It may or may not have beds and is generally used as a changing room and not as a bedroom.');
INSERT INTO room_category(title, description) VALUES ('SUITE ROOM', 'A Suite room is comprised of more than one room. Occasionally, it can also be a single large room with clearly defined sleeping and sitting areas. The decor of such units is of very high standards, aimed to please the affluent guest who can afford the high tariffs of the room category.');
INSERT INTO room_category(title, description) VALUES ('DUPLEX ROOM', 'The duplex suite comprises two rooms situated on different floors, which are connected by an internal staircase. This suite is generally used by business guests who wish to use the lower level as an office and meeting place and the upper-level room as a bedroom. This type of room is quite expensive and only can be found in luxury hotels.');
INSERT INTO room_category(title, description) VALUES ('HOSPITALITY ROOM', 'A hospitality room is designed for hotel guests who would want to entertain their own guests outside their allotted rooms. Such rooms are generally charged on an hourly basis.');



INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description) VALUES (1, 1, 1, 0, 800, 'A single room has one single bed for single occupancy. An additional bed (called extra bed) may be added to this room at the request of a guest and charged accordingly. The size of the bed is normally 3 feet by 6 feet. Mostly, the charge for a single room is occupied by one person');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description) VALUES (2, 2, 2, 0, 1100, 'A twin room has two single beds for double occupancy. An extra bed may be added to this room at the request of a guest and charged accordingly. Here the bed size is normally 3 feet by 6 feet. These rooms are suitable for sharing accommodation among a group of delegates of meeting.');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (3, 1, 2, 0, 1200, 'A double room has one double bed for double occupancy. An extra bed may be added to this room at the request of a guest and charged accordingly. The size of the double bed is generally 4.5 feet by 6 feet.','./../../../image/rooms/1.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (4, 3, 2, 1, 1500, 'A triple room has three separate single beds and can be occupied by three guests. This type of room is suitable for groups and delegates of meetings and conferences.','./../../../image/rooms/2.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (5, 4, 2, 2, 1800, 'A quad room has four separate single beds and can accommodate four persons together in the same room.','./../../../image/rooms/3.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (6, 2, 1, 1, 2200, 'A Hollywood twin room has two single beds with a common headboard. This hotel room type is generally occupied by two guests.','./../../../image/rooms/4.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (7, 2, 4, 0, 2500, 'A double-double room has two double beds and is normally preferred by a family or group as it can accommodate four persons together.','./../../../image/rooms/5.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (8, 2, 2, 0, 3000, 'A king room has a king-size bed. The size of the bed is 6 feet by 6 feet. An extra bed may be added to this room at the request of a guest and charged accordingly.','./../../../image/rooms/6.jpg');
INSERT INTO rooms(category_id, bed_count, adult_count, child_count, price, description, image) VALUES (9, 2, 2, 0, 2500, 'A queen room has a queen-size bed. The size of the bed is 5 feet by 6 feet. An extra bed may be added to this room at the request of a guest and charged accordingly.','./../../../image/rooms/7.jpg');


INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(1, 2, '2022-03-26', '2022-03-27', 'Need to book room for 2 people', 'Approved', 'Paid');
INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(2, 4, '2022-03-29', '2022-03-30', 'Need to book room for 3 people', 'Approved', 'Paid');
INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(3, 3, '2022-03-31', '2022-04-01', 'Need to book room for 2 people', 'Approved', 'Paid');
INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(4, 1, '2022-04-02', '2022-04-04', 'Need to book room for single person', 'Approved', 'Paid');
INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(5, 5, '2022-04-10', '2022-04-15', 'Need to book room for 4 people', 'Approved', 'Paid');
INSERT INTO booking(user_id, room_id, check_in_date, check_out_date, remark, status, payment) VALUES(6, 6, '2023-02-11', '2023-02-15', 'Need to book room for 2 people', 'Approved', 'Paid');

INSERT INTO room_facility VALUES(1, 1);
INSERT INTO room_facility VALUES(2, 2);
INSERT INTO room_facility VALUES(3, 3);
INSERT INTO room_facility VALUES(4, 4);
INSERT INTO room_facility VALUES(1, 5);
INSERT INTO room_facility VALUES(2, 6);
INSERT INTO room_facility VALUES(3, 7);
INSERT INTO room_facility VALUES(5, 1);
INSERT INTO room_facility VALUES(6, 2);
INSERT INTO room_facility VALUES(7, 3);
INSERT INTO room_facility VALUES(1, 3);


INSERT INTO contact_us(title, mobile_no, description, email) VALUES('StarGatewayResortSystem', '7038200015', 'A perfect place for vacation, relaxation or as a daytime getaway.Offering dining & an outdoor pool.', 'stargateway@test.com');


INSERT INTO enquiry(first_name, last_name, mobile_no, email, remark) VALUES('Mahesh', 'Babu', 2345543245, 'mahesh@test.com', 'please confirm availibility');

INSERT INTO Offers(title, description, time_period) VALUES('Valentine Offer', 'Book your rooms with 50% instant discount', 'From 7th Feb to 14th Feb');
INSERT INTO Offers(title, description, time_period) VALUES('Summer Vacation Offer', 'Book your rooms with 30% instant discount', 'From 15th Apr to 15th May');
INSERT INTO Offers(title, description, time_period) VALUES('Credit card Offer', 'Book your rooms using credit crad  and get 30% instant discount up to 300 RS once per user', 'From 1st Apr to 30th June');
INSERT INTO Offers(title, description, time_period) VALUES('Citi Credit & debit card Offer', 'Book your rooms using citi credit/debit card and get 10% instant discount up to 1000 RS once per user, *T&C Applied', 'For Every Weekend bookings');

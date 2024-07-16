# Task 2 Database Design (25 marks)

# Last Curtain Theatre Company Database Model - Technical Documentation

## Requirements

### Submission Requirement

- A single page PDF file called `task2-play.pdf` of your model exported from LucidChart.

### Task Description

Create a logical level diagram using Crow’s foot notations to represent the Last Curtain Theatre Company's data requirements using LucidChart. 

### Instructions

1. **Relations, Attributes, and Relationships:**
   - Include all necessary relations, attributes, and relationships.
   - Exclude any unnecessary relationships.

2. **Keys:**
   - Clearly identify the Primary Keys (P) and Foreign Keys (F) in your design.
   - Do not add surrogate keys.

3. **Modelling Requirements:**
   - Ensure your model conforms to the specified modelling requirements.

4. **Exclusions:**
   - Do not include verbs/names on relationship lines.
   - Do not use indicators (*) to show if an attribute is required or not.
   - Do not include data types for the attributes.


## 1. Introduction
This document describes the logical level database model for the Last Curtain Theatre Company, designed using Crow's Foot notation. The model aims to represent the company's data requirements for managing plays, artists, shows, theatres, bookings, and clients.

## 2. Entity-Relationship Model
The database model consists of the following main entities:
- PLAY
- ARTIST
- SHOW
- THEATRE
- ROLE
- CLIENT
- BOOKING
- PERFORMANCE (Associative Entity)

### 2.1 Entity Descriptions
#### PLAY
- Attributes: play_number (PK), play_name, writer_name
- Relationships: One PLAY can have many SHOWs

#### ARTIST
- Attributes: artist_number (PK), given_name, family_name, address, contact_phone, is_member
- Relationships: One ARTIST can participate in many SHOWs (through PERFORMANCE)

#### SHOW
- Attributes: show_number (PK), show_date, show_time, attendance, available_seats (derived)
- Relationships: 
  - Each SHOW is of one PLAY
  - Each SHOW is held at one THEATRE
  - Many ARTISTs can participate in one SHOW (through PERFORMANCE)

#### THEATRE
- Attributes: theatre_number (PK), street, town, manager_name, contact_phone, seat_capacity
- Relationships: One THEATRE can host many SHOWs

#### ROLE
- Attributes: role_id (PK), role_name
- Relationships: One ROLE can be performed in many PERFORMANCEs

#### CLIENT
- Attributes: client_number (PK), client_name, contact_number
- Relationships: One CLIENT can make many BOOKINGs

#### BOOKING
- Attributes: booking_number (PK), seats_booked, total_amount, paid_status
- Relationships: 
  - Each BOOKING is made by one CLIENT
  - Each BOOKING is for one SHOW

#### PERFORMANCE (Associative Entity)
- Attributes: performance_id (PK), artist_number (FK), show_number (FK), role_id (FK)
- Relationships: Links ARTIST, SHOW, and ROLE in a many-to-many-to-many relationship

## 3. Key Concepts and Design Decisions

### 3.1 Weak Entities and Associative Entities
The PERFORMANCE entity is both a weak entity and an associative entity:
- It's a weak entity because its existence depends on ARTIST, SHOW, and ROLE.
- It's an associative entity as it represents the many-to-many-to-many relationship between ARTIST, SHOW, and ROLE.

### 3.2 Derived Attributes
The 'available_seats' in the SHOW entity is a derived attribute:
- It can be calculated as: THEATRE.seat_capacity - SHOW.attendance

### 3.3 Handling Complex Relationships
The PERFORMANCE entity simplifies the complex ternary relationship between ARTIST, SHOW, and ROLE:
- It allows an artist to perform multiple roles in a show
- It allows a role to be performed by multiple artists in a show
- It provides a clear link between artists, their roles, and specific shows

### 3.4 Reducing Redundancy
- Separating ROLE from PERFORMANCE avoids repeating role information
- Using PERFORMANCE to link ARTIST, SHOW, and ROLE reduces data duplication
- Keeping THEATRE separate from SHOW avoids repeating theatre information for each show

## 4. Relationship Types

### 4.1 Identifying Relationships (Strong Dependencies)
Represented by solid lines in the ER diagram:
- PLAY to SHOW
- SHOW to THEATRE
- BOOKING to SHOW

### 4.2 Non-Identifying Relationships (Weak Dependencies)
Represented by dashed lines in the ER diagram:
- ARTIST to SHOW
- ARTIST to PERFORMANCE
- SHOW to PERFORMANCE
- ROLE to PERFORMANCE
- CLIENT to BOOKING

## 5. Normalization and Data Integrity
The model adheres to the Third Normal Form (3NF) by:
- Eliminating repeating groups
- Removing partial dependencies
- Removing transitive dependencies

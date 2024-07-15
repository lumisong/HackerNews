# Task 1: Relational Algebra

NAME:
ID：

## Alice Springs Desert Park Animal Query Task

i. Show the animal’s id, sex, species’ popular name for all animals kept in the centre named ‘Alice Springs Desert Park’. Note that only one centre is named ‘Alice Springs Desert Park’.

### Task Description

Display the following information for all animals kept in the centre named 'Alice Springs Desert Park':

- Animal ID
- Animal sex
- Species’ popular name

### Relational Algebra Expression

1. Select the record of the centre named ‘Alice Springs Desert Park’:

   $$
   C1 = \sigma_{\text{centre\textunderscore name = 'Alice Springs Desert Park'}} (\text{CENTRE})
   $$
2. Project the centre's ID:

   $$
   C2 = \pi_{\text{centre\textunderscore id}} (C1)
   $$
3. Join the result with the ANIMAL table using a theta join to select all animals kept in this centre:

   $$
   A1 = \text{ANIMAL} \bowtie_{\text{ANIMAL.centre\_id} = \text{C2.centre\_id}} C2
   $$
4. Project the required columns:

   $$
   A2 = \pi_{\text{animal\textunderscore id, animal\textunderscore sex, spec\textunderscore genus, spec\textunderscore name}} (A1)
   $$
5. Join the result with the SPECIES table using a theta join to get the species’ popular name:

   $$
   S1 = \text{SPECIES} \bowtie A2
   $$
6. Project the final required columns:

   $$
   R1 = \pi_{\text{animal\textunderscore id, animal\textunderscore sex, spec\textunderscore popular\textunderscore name}} (S1)
   $$

### Explanation

1. First, select the record from the CENTRE table where the centre name is 'Alice Springs Desert Park'.
2. Next, project the ID of this centre.
3. Then, use a theta join to join the ANIMAL table with the result of the previous step using `centre_id` to select all animals kept at this centre.
4. project the required columns from the animal records (animal ID, sex, species genus, and name).
5. use another theta join to join these animal records with the SPECIES table to obtain the species’ popular name.
6. Finally, project the final required columns: animal ID, animal sex, and species’ popular name.

## During 1 Jul 2018 and 31 Aug 2018(inclusive) Breeding Exchange Query Task

ii.For each breeding exchange that happened between 1 Jul 2018 and 31 Aug 2018(inclusive), show the exchange number,exchange date, centre name in which the animal was transferred from, centre name in which the animal was transferred to, animal id,species genus and species name. [6 marks]

### Task Description

For each breeding exchange that happened between 1 Jul 2018 and 31 Aug 2018 (inclusive), show the following information:

- Exchange number
- Exchange date
- Centre name from which the animal was transferred
- Centre name to which the animal was transferred
- Animal ID
- Species genus
- Species name

### Relational Algebra Expression

1. **Select the exchange records within the specified date range**:

   $$
   E1 = \sigma_{\text{exchange\_date} \geq '2018-07-01' \land \text{exchange\_date} \leq '2018-08-31'} (\text{EXCHANGE})
   $$
2. **Get related exchange and animal information**:

   $$
   EA1 = E1 \bowtie_{\text{EXCHANGE.animal\_id} = \text{ANIMAL.animal\_id}} \text{ANIMAL}
   $$
3. **Retrieve the names of the centres involved in the transfer**:

   Rename `centre_id` and `centre_name` for from-centre and to-centre:

   $$
   CF = \rho_{\text{centre\_id} \rightarrow \text{from\_centre\_id}, \text{centre\_name} \rightarrow \text{from\_centre\_name}} (\text{CENTRE})
   $$

   $$
   CT = \rho_{\text{centre\_id} \rightarrow \text{to\_centre\_id}, \text{centre\_name} \rightarrow \text{to\_centre\_name}} (\text{CENTRE})
   $$
4. **Join to get the complete from-centre and to-centre information**:

   $$
   EA2 = EA1 \bowtie_{\text{exchange\_from\_centre\_id} = \text{from\_centre\_id}} CF
   $$

   $$
   EA3 = EA2 \bowtie_{\text{exchange\_to\_centre\_id} = \text{to\_centre\_id}} CT
   $$
5. **Project the required columns**:

   $$
   R = \pi_{\text{exchange\_no, exchange\_date, from\_centre\_name, to\_centre\_name, animal\_id, spec\_genus, spec\_name}} (EA3)
   $$

### Explanation

1. **Select the exchange records within the specified date range**:

   - selects all exchange records that occurred between 1 Jul 2018 and 31 Aug 2018 (inclusive).
   - use a single selection operation with a compound condition instead of an intersection of two selections, which is more efficient.
2. **Get related exchange and animal information**:

   - This join operation links the selected exchanges with the corresponding animal information using the `animal_id` attribute.
   - to access animal-specific details such as species genus and name.
3. **Retrieve the names of the centres involved in the transfer**:

   - rename the `centre_id` and `centre_name` attributes in the CENTRE table twice.
   - This renaming allows to distinguish between the origin centre (from_centre) and the destination centre (to_centre) in subsequent operations.
4. **Join to get the complete from-centre and to-centre information**:

   - These two join operations connect our exchange and animal information with the centre information.
   - The first join (EA2) adds the 'from' centre details, and the second join (EA3) adds the 'to' centre details.
5. **Project the required columns**:

   - Finally, select only the columns specified in the task requirements.
   - This includes: exchange number, exchange date, from-centre name, to-centre name, animal ID, species genus, and species name.

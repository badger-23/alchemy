# SQL Build

[Get Started](https://github.com/alchemycodelab/red-green-refactor-sql)

In the `join.sql` file, write a SQL query to return a list of animals with their species. Your query should select the animal's `name` and species `type`.

Next, in the `aggregation.sql` file, write a SQL query that returns the number of each species in the animal table.

You can view the `utils/setup.sql` file to see the table structure and data you'll be querying.

The tables for this build are as follows:

## Animal Model
- id BIGINT
- name TEXT 
- species_id REFERENCES species(id)
  
## Species Model
- id BIGINT
- type TEXT

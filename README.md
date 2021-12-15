# XP-COLLECTOR

# Install

  ### Projekt
    $ git clone https://github.com/ogerly/xp-collector.git
    $ cd xp-collector

Bitte führe im frontend und im backend folgende befehle aus. 

  ### frontend
    $ cd frontend
    $ npm install
    $ npm run serve
    
      App running at:
      - Local:   http://localhost:8080/ 
      - Network: http://192.168.0.248:8080/
 

Öffne eine zweite Konsole und 

  ### backend
    $ cd backend
    $ npm install
    $ node index
    
      Server git-xp-collector is running on port http://localhost:5000.

   ### database  

    backend/config/neo4j.js
    Line: 5 
 
   ### Database NeoVis
    frontend/src/assets/config.js
    Line: 3, 4, 5 
_____________

### Task:

XP-COLLECTOR is a simple data structure used to store and organise data. It is a structure because it arranges and links data in the simplest possible way to allow them to be accessed and managed efficiently. 

Two options are available for recording and linking data. 

Data input

Linking data


![typen](https://user-images.githubusercontent.com/1324583/139631987-1b5cd41d-d2a5-486b-b345-8101612807d9.png)




Complex structures can be created by simply linking individual data records. Similar to a mind map. 




![arten](https://user-images.githubusercontent.com/1324583/139631997-e948de7a-e8e1-4b92-b315-62f610dba775.png)




It should always be possible to enter data in the simplest way. The simplest way is ONE data set. In the following, we will call the individual data record a NODE.


Linking should always be done by connecting TWO individual data sets. The linking of two data records is referred to in the following as KANTS.


### Exceptions: 
- ISO 8601 - Data elements and interchange formats; Information interchange; Representation of date and time.



## Objective:

To create, manage and visualise complex data structures in the simplest possible way. 
Make data structures possible for visual viewing. 



##Technology

### Frontend / Backend 

- Vue
- Neo4j
- NeoVis.js   https://github.com/neo4j-contrib/neovis.js



![FireShot Capture 837 - frontend2 - localhost](https://user-images.githubusercontent.com/1324583/146207393-11ec0202-126c-4b2c-b21c-70ad1d8e9077.png)


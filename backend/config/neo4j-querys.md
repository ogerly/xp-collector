
 //Ein Label erstellen
    CREATE (n:Person)

 // Einen Knoten mit Label Person erstellen
    CREATE (n:Person {name: 'Leonardo da Vinci', info: 'Info zu Leonardo da Vinci '})

// Lösche alle Knoten:personen  die keinen namen haben = null
    MATCH (n:Person) where NOT (EXISTS (n.name)) detach delete n

// Anzeigen von knoten:Personen nach namen limit 25
    MATCH (n:Person) RETURN n.name LIMIT 25



// Einen Knoten mit Label Bild erstellen
    CREATE (n:Bild {name: 'Mona Lisa', info: 'Info zu Mona Lisa'})


// Verbindet Leonardo da Vinci -Zeichnete->  Mona Lisa
    MATCH (a:Person),(b:Bild)
    WHERE a.name = "Leonardo da Vinci" AND b.name = "Mona Lisa"
    CREATE (a)-[r:Zeichnete]->(b)
    RETURN r



// Einen Knoten mit dem Label Staat erstellen
    CREATE (n:Staat {name: 'Italien', info: 'Info zu Italien'})

// Einen Knoten mit dem Label Region erstellen 
    CREATE (n:Region  {name: 'Toskana', info: 'Info zur Region Toskana'})


// Einen Knoten mit dem Label Staat erstellen
    CREATE (n:Metropolitanstadt  {name: 'Florenz', info: 'Metropolitanstadt Florenz'})

// Einen Knoten mit dem Label Schutzpatron erstellen
    CREATE (n:Schutzpatron  {name: 'Sant’Andrea', info: 'Info zu Schutzpatron Sant’Andrea', wikipedia:'https://de.wikipedia.org/wiki/Andreas_(Apostel)'})




    MATCH (a:Staat),(b:Region)
    WHERE a.name = "Italien" AND b.name = "Toskana"
    CREATE (a)-[r:Regionen]->(b)
    RETURN r


    MATCH (a:Region),(b:Metropolitanstadt)
    WHERE a.name = "Toskana" AND b.name = "Florenz"
    CREATE (a)-[r:Metropolitanstadt]->(b)
    RETURN r

    MATCH (a:Metropolitanstadt),(b:Gemeinde)
    WHERE a.name = "Florenz" AND b.name = "Vinci"
    CREATE (a)-[r:Gemeinde]->(b)
    RETURN r


    MATCH (a:Person),(b:Gemeinde)
    WHERE a.name = "Leonardo da Vinci" AND b.name = "Vinci"
    CREATE (a)-[r:Geboren]->(b)
    RETURN r



    MATCH (a:Gemeinde),(b:Schutzpatron)
    WHERE a.name = "Vinci" AND b.name = "Sant’Andrea"
    CREATE (a)-[r:Schutzpatron]->(b)
    RETURN r

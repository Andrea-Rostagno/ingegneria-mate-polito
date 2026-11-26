---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["bitmapped join", "join bitmap", "indice di join bitmap", "bitmap join index"]
tags: [competenza, area/informatica]
---

# Bitmapped join index

> Matrice di bit che precalcola il join tra due tabelle; combinata con gli indici bitmap sui predicati permette di trovare le tuple della tabella centrale da leggere con sole operazioni sui bit.

## Definizione / enunciato
Il **bitmapped join index** tra due tabelle A e B è una matrice di bit con una colonna per ogni RID di A e una riga per ogni RID di B; l'elemento $(i,j)$ vale 1 se la tupla con RID $j$ di A fa join con la tupla con RID $i$ di B, 0 altrimenti. Gli aggiornamenti possono essere lenti.

Il **bitmapped join** si usa tipicamente nelle query OLAP che uniscono più tabelle a una grande tabella centrale. Usa uno o più bitmapped join index (uno per ogni coppia di tabelle unite) e, insieme, gli indici bitmap sui predicati delle singole tabelle. L'accesso alla grande tabella centrale è l'**ultimo passo**.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Invece di unire le tabelle e poi filtrare, si filtrano le tabelle piccole e si "traducono" i loro RID nei RID della tabella grande tramite il join precalcolato; poi si fa l'AND dei bitmap e si legge solo ciò che serve.

## Come si usa
Esempio delle slide: STUDENT(Reg#, SName, Gender), COURSE(Course#, CName, CourseYear), EXAM(Reg#, Course#, Date, Grade); query: voto medio degli studenti maschi negli esami dei corsi del primo anno della magistrale (`CourseYear = '1M' AND Gender = 'M'`).
1. Il bitmap su CourseYear dà i RID dei corsi del primo anno (RID 1 e 4).
2. Con il bitmapped join index Course-Exam si fa l'OR delle colonne di quei corsi: si ottiene il bitmap $RID_{CY}$ degli esami di quei corsi.
3. Analogamente con Gender e il join index Student-Exam si ottiene $RID_G$.
4. $RID_{CY}$ AND $RID_G$ dà i RID degli esami da leggere; solo allora si accede a EXAM.
È lo schema di uno star join in un data warehouse (tabella dei fatti al centro, dimensioni intorno).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Bitmapped join index" e "Bitmapped join". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 64-69).

## Prerequisiti
- [[Indice bitmap]]: bitmap applicate al join

## Porta a
- [[Progettazione fisica del data warehouse]]: join tra fatti e dimensioni

## Collegati
- [[Schema a stella]]: join tra tabella dei fatti e dimensioni

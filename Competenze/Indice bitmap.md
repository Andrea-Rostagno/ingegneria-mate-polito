---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["bitmap index", "matrice di bit", "RID", "Row IDentifier"]
tags: [competenza, area/informatica]
---

# Indice bitmap

> Indice basato su una matrice di bit, una colonna per ogni valore dell'attributo e una riga per ogni tupla: trasforma la valutazione di predicati booleani in operazioni bit a bit.

## Definizione / enunciato
L'indice bitmap dà accesso diretto ai dati in base al valore di un campo chiave tramite una **matrice di bit** che referenzia le righe con i loro **RID** (Row IDentifier); i dati sono in una struttura separata e la posizione delle tuple non è vincolata. La matrice ha una colonna per ogni valore distinto dell'attributo e una riga per ogni tupla; l'elemento $(i,j)$ vale 1 se la tupla $i$ assume il valore $j$, 0 altrimenti.

## Formule chiave
Spazio (slide "B+-tree versus bitmap", da Golfarelli-Rizzi):
$$\text{B-tree}: NR\times Len(Pointer),\qquad \text{Bitmap}: NR\times NK\times 1\ \text{bit},\qquad Len(Pointer)=4\times 8\ \text{bit}$$
dove $NR$ è il numero di record e $NK$ il numero di valori distinti. Nel grafico lo spazio del bitmap cresce linearmente con $NK$ e supera quello del B-tree intorno a $NK\approx 32$ (lettura del grafico).

## Intuizione
Ogni colonna è un insieme di tuple codificato in bit: AND, OR e NOT tra colonne sono intersezioni, unioni e complementi di insiemi, calcolati senza toccare la tabella.

## Come si usa
**Vantaggi**: molto efficiente per espressioni booleane di predicati (si riducono a operazioni sui bit); adatto ad attributi con dominio di **cardinalità limitata**. **Svantaggi**: non si usa per attributi continui; lo spazio cresce molto con la cardinalità del dominio.
Esempio: EMPLOYEE(EmployeeId, Name, Job) con Job in {Engineer, Consultant, Manager, Programmer, Secretary, Accountant}; la colonna Programmer ha 1 nelle righe 2 e 4.
Valutazione di una congiunzione: prima si intersecano i bitmap (o i RID) degli indici disponibili, poi si legge la tabella. Esempio: "studentesse residenti in Piemonte esenti dalle tasse": AND delle colonne Gender = F, Exempt = Y, Region = Piemonte, che lascia solo il RID 5. Per predicati poco selettivi, se c'è, conviene considerare il bitmap invece della scansione completa. È la base del bitmapped join index e degli indici del data warehouse.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): indice bitmap e uso nella valutazione dei predicati. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/03 - 14-PhysicalAccess.pdf` (pp. 38-41); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 51-54).

## Prerequisiti
- Nessuno.

## Porta a
- [[Progettazione fisica del data warehouse]]: indice adatto agli attributi dimensionali
- [[Bitmapped join index]]: bitmap applicate al join

## Collegati
- [[B+-tree]]: confronto di spazio e di uso nella valutazione dei predicati

---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [dati spaziali, query spaziali, spatial data, GEOMETRY, POINT, LINESTRING, POLYGON, ST_Distance_Sphere, ST_Intersects, ST_Area, ST_Envelope, MBR, minimum bounding rectangle]
tags: [competenza, area/informatica]
---

# Query spaziali in SQL

> Estensione dei DBMS (qui MySQL) per memorizzare geometrie (punti, linee, poligoni) e interrogarle con funzioni su proprietà e relazioni spaziali.

## Definizione / enunciato
I dati spaziali si rappresentano con geometrie diverse: **Point**, **LineString** (Line), **Polygon**, ecc. MySQL fornisce funzioni per:
- creare geometrie in vari formati (WKT, WKB, interno) e convertirle tra formati;
- accedere alle proprietà qualitative o quantitative di una geometria;
- descrivere relazioni tra due geometrie;
- creare nuove geometrie da quelle esistenti.

Nella definizione delle tabelle i domini spaziali sono `GEOMETRY`, `POINT`, `LINESTRING`, `POLYGON`, oltre a `SDO_GEOMETRY`.

## Formule chiave
| funzione | risultato |
|---|---|
| `Point(x, y)`, `LineString(pt, pt, ...)`, `Polygon(ls, ...)` | costruzione (la linea vuole almeno 2 punti) |
| `ST_Dimension(g)` | dimensione intrinseca: −1, 0, 1 o 2 |
| `ST_Envelope(g)` | rettangolo di delimitazione minimo (MBR) come poligono |
| `ST_GeometryType(g)` | nome del tipo di geometria |
| `ST_X(p)`, `ST_Y(p)` | coordinate di un punto |
| `ST_Length(ls)`, `ST_Area(poly)`, `ST_Centroid(poly)` | lunghezza, area, centroide |
| `ST_Difference(g1, g2)` | differenza degli insiemi di punti |
| `ST_Intersects(g1, g2)` | 1 o 0 se si intersecano |
| `ST_Distance_Sphere(g1, g2 [, radius])` | distanza sferica minima in metri (raggio di default 6.370.986 m) |

## Intuizione
Una geometria è un valore come un altro di una colonna: le funzioni spaziali si usano nella SELECT e nella WHERE come le funzioni scalari, ma ragionano su forme e distanze invece che su numeri e stringhe.

## Come si usa
```sql
INSERT INTO t1 (pt_col) VALUES(Point(1,2));
SELECT ST_Distance_Sphere(ST_GeomFromText('POINT(0 0)'),
                          ST_GeomFromText('POINT(180 0)'));
-- 20015042.813723423
```

## Nei corsi
- **Base di dati** (triennale): solo sintassi MySQL. Fonti: `triennale/ANNO 3/base di dati/4-SQL_query_avanzate.pdf` (pp. 30-34); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (p. 7, domini spaziali).

## Prerequisiti
- [[Definizione delle tabelle in SQL]]: domini spaziali nelle colonne

## Porta a
- Nessuno.

## Collegati
- [[Funzioni JSON in SQL]]: altra estensione dei tipi di dato, anch'essa dipendente dal DBMS

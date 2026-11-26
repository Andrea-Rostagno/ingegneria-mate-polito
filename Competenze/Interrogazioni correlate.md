---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [EXISTS, NOT EXISTS, operatore EXISTS, condizione di correlazione, subquery correlata, sottointerrogazione correlata, correlazione tra interrogazioni, visibilità degli attributi]
tags: [competenza, area/informatica]
---

# Interrogazioni correlate

> Sottointerrogazioni la cui esecuzione dipende dal valore di attributi della tupla corrente dell'interrogazione esterna, tramite una condizione di correlazione; tipicamente con EXISTS e NOT EXISTS.

## Definizione / enunciato
Una **condizione di correlazione** sta nella WHERE dell'interrogazione nidificata e lega attributi delle sue tabelle ad attributi delle tabelle di un'interrogazione più esterna. Non si possono esprimere condizioni di correlazione in interrogazioni allo stesso livello, né riferirsi ad attributi di tabelle di un'interrogazione nidificata più interna.

**EXISTS** (sottointerrogazione) è vero se la sottointerrogazione restituisce almeno una tupla, falso se restituisce l'insieme vuoto; **NOT EXISTS** il contrario. Nella sottointerrogazione la SELECT è obbligatoria ma irrilevante (`SELECT *`).

## Formule chiave
```sql
SELECT NomeF
FROM F
WHERE NOT EXISTS (SELECT *
                  FROM FP
                  WHERE CodP='P2'
                    AND FP.CodF=F.CodF);   -- condizione di correlazione
```
Risultato nelle slide: Gabriele, Matteo (con EXISTS: Andrea, Luca, Antonio).

## Intuizione
La sottointerrogazione viene concettualmente rieseguita per ogni tupla della query esterna, con `F.CodF` sostituito dal valore corrente (per F1 diventa `FP.CodF='F1'`). EXISTS è quindi un test "esiste almeno una riga collegata a questa?".

## Come si usa
Correlazione con aggregati:
```sql
-- per ogni prodotto, il fornitore della quantità massima
SELECT CodP, CodF
FROM FP AS FPX
WHERE Qta = (SELECT MAX(Qta)
             FROM FP AS FPY
             WHERE FPY.CodP=FPX.CodP);

-- viaggi più brevi della media dello stesso percorso
SELECT CodV
FROM VIAGGIO AS VA
WHERE OraArrivo-OraPartenza <
  (SELECT AVG(OraArrivo-OraPartenza)
   FROM VIAGGIO AS VB
   WHERE VB.LuogoPartenza=VA.LuogoPartenza
     AND VB.LuogoArrivo=VA.LuogoArrivo);
```
Gli alias (FPX, FPY) distinguono le due istanze della stessa tabella.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/2-SQL_query_nidificate-2.pdf` (pp. 43-69).

## Prerequisiti
- [[Interrogazioni nidificate]]: la correlazione è una nidificazione legata alla query esterna

## Porta a
- [[Tabella derivata]]: formulazione equivalente senza correlazione

## Collegati
- [[Semi-join e anti-join]]: EXISTS e NOT EXISTS filtrano per esistenza come semi-join e anti-join

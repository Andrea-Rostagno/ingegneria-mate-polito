---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [GRANT, REVOKE, privilegi di accesso, WITH GRANT OPTION, ruolo, CREATE ROLE, SET ROLE, sicurezza dei dati, access control]
tags: [competenza, area/informatica]
---

# Controllo dell'accesso in SQL

> Meccanismo con cui il DBMS protegge le risorse dello schema: i privilegi si concedono con GRANT, si revocano con REVOKE e si raggruppano in ruoli.

## Definizione / enunciato
La sicurezza protegge i dati da letture non autorizzate, alterazione o distruzione. È garantita da vincoli specificati dal DBA e memorizzati nel dizionario dei dati. Ogni componente dello schema è una **risorsa** (tabella, vista, attributo, dominio, procedura). Un **privilegio** è caratterizzato da: risorsa, tipo di privilegio (azione permessa), utente che concede, utente che riceve, facoltà di trasmetterlo.

Tipi: **SELECT**, **INSERT**, **DELETE** (tabelle e viste), **UPDATE** (tabelle, viste, attributi), **REFERENCES** (riferirsi alla risorsa nello schema di una tabella; tabelle e attributi), **USAGE** (usare la risorsa, per esempio un tipo, in nuovi schemi). Il creatore riceve tutti i privilegi e solo lui può fare DROP e ALTER; l'amministratore (utente system) ha tutti i privilegi su tutto.

## Formule chiave
```sql
GRANT ElencoPrivilegi ON NomeRisorsa TO ElencoUtenti [WITH GRANT OPTION];
REVOKE ElencoPrivilegi ON NomeRisorsa FROM ElencoUtenti [RESTRICT | CASCADE];
CREATE ROLE NomeRuolo;
SET ROLE NomeRuolo;
```
`ALL PRIVILEGES` indica tutti i privilegi. **RESTRICT** (default): la revoca non si esegue se comporta altre revoche. **CASCADE**: revoca in cascata i privilegi propagati e rimuove gli elementi creati sfruttandoli.

## Intuizione
WITH GRANT OPTION crea catene di concessioni; la revoca CASCADE le smonta a ritroso. Il **ruolo** è un profilo di accesso (insieme di privilegi): l'utente ne ricopre uno alla volta e i privilegi si gestiscono per profilo invece che per persona.

## Come si usa
Esempi delle slide:
```sql
GRANT ALL PRIVILEGES ON PRODOTTI TO Neri, Bianchi;
GRANT SELECT ON FORNITORI TO Rossi WITH GRANT OPTION;
REVOKE UPDATE ON PRODOTTI FROM Bianchi;
REVOKE SELECT ON FORNITORI FROM Rossi CASCADE;
```
Rossi può trasferire il SELECT ad altri utenti. Con l'ultima REVOKE, se Rossi aveva propagato il privilegio, questo è revocato in cascata; se aveva creato una vista con quel SELECT, la vista è rimossa.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/SQL_costrutti_avanzati.pdf` (pp. 38-50; esempi di GRANT verificati sull'immagine di p. 46).

## Prerequisiti
- [[Linguaggio SQL]]: GRANT e REVOKE sono istruzioni DDL

## Porta a
- Nessuno.

## Collegati
- [[Vista (SQL)]]: le autorizzazioni si associano alle viste
- [[DBMS]]: realizza la privatezza dei dati

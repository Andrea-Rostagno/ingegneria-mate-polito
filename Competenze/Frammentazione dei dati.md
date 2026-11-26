---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["data fragmentation", "frammentazione orizzontale", "frammentazione verticale", "frammentazione mista", "allocazione dei frammenti", "schema di allocazione", "livelli di trasparenza", "trasparenza di frammentazione", "trasparenza di allocazione", "trasparenza di linguaggio", "progettazione di basi di dati distribuite"]
tags: [competenza, area/informatica]
---

# Frammentazione dei dati

> Base della progettazione di una base di dati distribuita: una relazione è divisa in frammenti (insiemi di tuple, di attributi o entrambi), allocati su server diversi; i livelli di trasparenza dicono quanto l'applicazione deve sapere di questa distribuzione.

## Definizione / enunciato
Un **frammento** di una relazione R è un sottoinsieme di R per tuple, per schema o per entrambi.
- **Orizzontale**: sottoinsieme di tuple con lo stesso schema di R, ottenuto con una selezione $\sigma_p$ ($p$ predicato di partizionamento); i frammenti non si sovrappongono.
- **Verticale**: sottoinsieme dello schema, ottenuto con una proiezione $\pi_X$; $X$ deve includere la chiave primaria per poter ricostruire R; tutte le tuple sono incluse; i frammenti si sovrappongono sulla chiave.
- **Mista**: entrambe.

Proprietà: **completezza** (ogni informazione di R sta in almeno un frammento) e **correttezza** (R si può ricostruire dai frammenti). Ogni frammento sta di solito in un file diverso, eventualmente su un server diverso: R non esiste fisicamente.

**Schema di allocazione**: descrive su quali nodi stanno i frammenti; *non ridondante* se ogni frammento sta su un solo nodo, *ridondante* se alcuni frammenti sono replicati (più disponibilità, ma manutenzione complessa e sincronizzazione delle copie).

**Livelli di trasparenza**: di *frammentazione* (l'applicazione vede solo la tabella), di *allocazione* (vede i frammenti ma non dove sono né le repliche), di *linguaggio* (deve indicare frammento e nodo, senza dialetti SQL; è il formato in cui il DBMS distribuito traduce le query di livello più alto).

## Formule chiave
Employee(Emp#, Ename, DeptName, Tax):
- orizzontale: $E_i=\sigma_{DeptName=\ldots}\,Employee$, ricostruzione $Employee=E_1\cup E_2\cup\dots\cup E_N$;
- verticale: $E_1=\pi_{Emp\#,Ename,DeptName}\,Employee$, $E_2=\pi_{Emp\#,Ename,Tax}\,Employee$, ricostruzione $Employee=E_1\bowtie E_2$.

## Intuizione
Si mette ogni dato vicino a chi lo usa (es. fornitori di Torino a Torino). Più trasparenza offre il DBMS, meno il programmatore deve sapere dove sono i dati.

## Come si usa
Esempio delle slide: Supplier S(S#, SName, City, Status) frammentato su City in $S_1=\sigma_{City='Torino'}S$ (su xxx.torino.it) e $S_2=\sigma_{City='Roma'}S$ (replicato su roma1 e roma2). Con trasparenza di frammentazione basta `SELECT SName FROM S WHERE S#=:CODE`; con trasparenza di allocazione si interroga S1 e, se non trovato, S2; con trasparenza di linguaggio si scrive `FROM S1@xxx.torino.it` e si sceglie la replica di S2.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Distributed Database Design". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (pp. 13-29).

## Prerequisiti
- [[Architettura client-server]]: dati distribuiti su più server

## Porta a
- [[Transazioni distribuite]]: transazioni su frammenti remoti

## Collegati
- [[Parallelismo nei DBMS]]: dati partizionati su più dischi e nodi

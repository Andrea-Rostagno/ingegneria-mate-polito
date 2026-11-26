---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [DLT, registro distribuito, libro mastro distribuito, distributed ledger, database distribuito, single point of failure, CRUD]
tags: [competenza, area/informatica]
---

# Distributed Ledger Technology

> Registro le cui informazioni sono duplicate fra i molti nodi di una rete, invece che custodite in una sola copia da un'autorità centrale: è la famiglia di tecnologie di cui la blockchain è un caso particolare.

## Definizione / enunciato
Il **libro mastro** tradizionale soffre di furto o danneggiamento intenzionale, fattore umano (scrivere 100.000 invece di 10.000) e forza maggiore (incendi, inondazioni). La soluzione è fare copie: una **DLT** prevede la duplicazione dei dati fra i (tanti) nodi di una rete.

**Vantaggi**:
- **trasparenza e immutabilità**: i nodi hanno pari diritti sui dati, le decisioni sono collettive, resta una traccia di controllo immutabile e verificabile;
- **resistenza agli attacchi**: non c'è un unico punto di attacco, quindi l'attacco è troppo costoso.

In una DLT generica si fanno le quattro operazioni **Create, Retrieve, Update, Delete**; in una blockchain solo Create e Retrieve.

## Formule chiave
Nessuna formula: la distinzione chiave è $\{C,R,U,D\}$ per una DLT generica contro $\{C,R\}$ per una blockchain.

## Intuizione
Con i dati in una sola copia, la sicurezza dipende dal server centrale e dalla lealtà di chi ci lavora; con migliaia di copie bisognerebbe attaccare o corrompere contemporaneamente migliaia di utenti senza lasciare traccia. Il difetto apparente è la mancanza di privacy, mitigato con la crittografia (pseudonimizzazione); il pregio è l'assenza di un single point of failure (*security by design*).

## Come si usa
Obiettivo del corso: eliminare l'autorità centrale di garanzia (Stato, banca, notaio) e permettere transazioni sicure fra sconosciuti. La blockchain è descritta come database distribuito, immodificabile dal singolo, che introduce la scarsità digitale ed elimina la necessità di fiducia reciproca. La legge italiana 197/2022 definisce le cripto-attività proprio tramite la "tecnologia di registro distribuito".

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 3-9); dispensa §2.1-2.2.

## Prerequisiti
- Nessuno.

## Porta a
- [[Blockchain]]: DLT a blocchi concatenati
- [[Criteri di adozione della blockchain]]: quando conviene un registro condiviso
- [[Fiscalità delle cripto-attività]]: definizione giuridica basata sul registro distribuito
- [[Web3]]: rete globale decentralizzata

## Collegati
- [[Protocollo di consenso]]: tiene allineate le copie senza autorità centrale

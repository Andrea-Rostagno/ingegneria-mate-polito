---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [length extension attack, attacco di estensione della lunghezza, estensione di lunghezza, HashPump, keyed digest forgery]
tags: [competenza, area/informatica]
---

# Attacco length extension

> Contro una hash Merkle-Damgård, conoscere $\mathrm{Hash}(k\|m)$ e la lunghezza di $k\|m$ basta per calcolare l'hash di $k\|m\|\text{padding}\|\text{dati aggiunti}$ senza conoscere $k$. Così si falsifica il MAC ingenuo $t=\mathrm{Hash}(k\|m)$.

## Definizione / enunciato
In una costruzione Merkle-Damgård il digest del blocco $n$ è calcolato dal digest dei primi $n-1$ blocchi. Il digest finale coincide quindi con lo stato interno. Chi intercetta il keyed-hash lo usa come nuovo IV e continua a comprimere $k$ blocchi aggiunti, padding incluso (Basile, pp. 8-10).

Il messaggio esteso ha la forma $m' = m\ \|\ \text{padding}(m)\ \|\ \text{dati aggiunti}$. L'attaccante deve conoscere, o indovinare, la lunghezza del segreto per ricostruire il padding.

## Formule chiave
Padding tipico (Basile, p. 9):
$$\text{blocco} = \text{dati}\ \|\ 1\ \|\ 0\cdots0\ \|\ \text{lunghezza(dati in bit)},$$
con blocchi da 512 o 1024 bit. Per MD4 la lunghezza è codificata su 64 bit e gli zeri portano la lunghezza a $\equiv448\pmod{512}$ (Crypto 8, p. 3). Lo stato si continua con la ricorrenza $H_j=\mathrm{Com}(H_{j-1},x_j)$ partendo da $H_0=$ digest intercettato.

## Intuizione
La hash non "chiude" lo stato: l'output è un punto intermedio legittimo della catena. Chiunque può prolungarla senza sapere da dove è partita.

## Come si usa
- È un caso speciale che rende insicuro il MAC ingenuo $t=\mathrm{Hash}(k\|P)$ (Crypto 7, Nota 7.4.3). Ha colpito schemi commerciali di autenticazione di messaggi web (Basile).
- **Strumento:** HashPump implementa l'attacco per diversi algoritmi.
- **Rimedio:** HMAC. Le dispense italiane presentano HMAC proprio come risposta a questo problema di progettazione (Critto 6, Nota 6.2.15). Anche la valutazione di una hash contro length extension è tra i requisiti di progetto (Nota 6.2.7).
- Altre debolezze di Merkle-Damgård nella stessa lezione: multi-collisioni, herding, collisioni di Wang contro MD4, SHAttered contro SHA-1.

## Nei corsi
- **Crittografia** (magistrale): §7.4.1 delle dispense inglesi e lezione di Basile "Attacks against hash functions", con esercitazione `9] length_extension`. Fonti: `magistrale/Crittografia/Slide/presentations/presentations/200604_03LPYOV_hash_attacks.pdf` (pp. 8-12); `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (p. 16); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6, pp. 14, 19).

## Prerequisiti
- [[Costruzione di Merkle-Damgård]]: l'attacco sfrutta la catena di compressioni
- [[Message authentication code]]: il bersaglio è un MAC costruito male

## Porta a
- [[HMAC]]: la costruzione che lo previene

## Collegati
- [[Funzione hash crittografica]]: le hash Merkle-Damgård (MD5, SHA-1, SHA-2) sono vulnerabili
- [[Costruzione a spugna]]: costruzione alternativa in cui l'output non è l'intero stato

---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [ASCII, Unicode, UTF-8, codifica, caratteri di controllo, ord e chr, informazione non numerica]
tags: [competenza, area/informatica]
---

# Codifica dei caratteri

> Corrispondenza tra caratteri (e in generale oggetti non numerici) e codici binari: ASCII, Unicode e la codifica UTF-8 su file.

## Definizione / enunciato
Il calcolatore manipola **solo numeri**: per l'informazione non numerica si assegna a ogni oggetto un codice univoco, che nel calcolatore è binario. Con $N$ bit si codificano $2^N$ oggetti; per $M$ oggetti servono $N = \lceil \log_2 M \rceil$ bit.

- **ASCII** (American Standard Code for Information Interchange): 8 bit (originariamente 7 per US-ASCII) per 52 lettere, 10 cifre, punteggiatura e **caratteri di controllo** (CR 13, LF/NL 10, FF 12, HT 9, VT 11, NUL 0, BEL 7, EOT 4).
- **Unicode**: 21 bit per carattere, tutti i caratteri di tutte le lingue (più di un milione) ed emoji; è il codice dei caratteri in Python.
- **UTF-8**: la codifica di Unicode su file più usata, a lunghezza variabile: 1 byte per i caratteri US-ASCII (MSB = 0), 2 byte per latini con diacritici, greco, cirillico, armeno, ebraico, arabo, siriano, maldiviano, 3 byte per altre lingue comuni, 4 byte per caratteri rarissimi.

## Formule chiave
$$N = \lceil \log_2 M \rceil$$
In Python: `ord("H")` dà 72, `ord('x')` dà 120, `chr(i)` fa il contrario.

## Intuizione
Non confondere il **formato** di un file (es. Word, che memorizza anche font e spaziatura: testo formattato) con il **codice** dei caratteri (testo non formattato: solo i caratteri). Audio, video e colori seguono lo stesso principio oggetti-codici (es. 8 bit per canale R, G, B: 256 sfumature).

## Come si usa
Conseguenze pratiche nel corso: l'ordine alfabetico delle stringhe segue i codici (maiuscole prima delle minuscole, P3 p. 54); i file con lettere accentate vanno aperti con `encoding='utf-8'` (P7 p. 12), altrimenti Python usa la codifica del sistema operativo.

## Nei corsi
- **Informatica** (triennale): unità T1 (rappresentazione di dati non numerici) e P2 (caratteri, codici ASCII). Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 43-52), `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 74-76).

## Prerequisiti
- [[Sistema di numerazione posizionale]]: i codici sono numeri binari su N bit

## Porta a
- [[Apertura e chiusura di file]]: il file va aperto con la codifica giusta

## Collegati
- [[Stringa in Python]]: i caratteri delle stringhe sono codici Unicode
- [[Operatori relazionali]]: l'ordine alfabetico segue i codici dei caratteri

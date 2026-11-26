---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["topology of the complex plane", "intorno di z0 in C", "aperti e chiusi del piano complesso", "dominio del piano complesso", "regione del piano complesso", "insieme connesso per poligonali"]
tags: [competenza, area/analisi]
---

# Topologia del piano complesso

> Il linguaggio di intorni, aperti, chiusi, domini e regioni di $\mathbb C$ su cui si appoggiano limiti, derivata complessa e integrali di linea.

## Definizione / enunciato
- **Intorno** di $z_0$ di raggio $r>0$: $B_r(z_0)=\{z\in\mathbb C:\ |z-z_0|<r\}$ (Def. 1.5).
- Dato $\Omega\subseteq\mathbb C$, un punto $z$ è **interno** se un intorno $B_r(z)$ è contenuto in $\Omega$, **esterno** se è interno al complementare, **di frontiera** se non è né interno né esterno (Def. 1.6). Interno $\mathring\Omega$, frontiera $\partial\Omega$, chiusura $\overline\Omega=\Omega\cup\partial\Omega$.
- $\Omega$ è **aperto** se $\Omega=\mathring\Omega$, **chiuso** se contiene la sua frontiera; è chiuso se e solo se il complementare è aperto (Def. 1.9). **Limitato** se $|z|\le R$ per ogni $z\in\Omega$; **compatto** se chiuso e limitato.
- Un aperto è **connesso (per archi)** se due suoi punti qualsiasi sono uniti da una poligonale contenuta nell'insieme (Def. 1.14). Aperto e connesso = **dominio**; $\Omega=A\cup Z$ con $A$ aperto connesso e $\emptyset\subseteq Z\subseteq\partial A$ = **regione** (Def. 1.15).

## Formule chiave
$$S[z_1,z_2]=\{z=(1-t)z_1+tz_2:\ 0\le t\le1\}$$
(segmento, base di convessità e poligonali).

## Intuizione
Sono le stesse nozioni di $\mathbb R^2$ (con $|z-z_0|$ come distanza): servono per dire "in un intorno di", condizione richiesta da derivata complessa e analiticità.

## Come si usa
Esempi 1.10 e 1.16: il disco $\{|z|\le1\}$ è chiuso (regione compatta); la corona $\{1\le|z|<2\}$ non è né aperta né chiusa ma è connessa, mentre il suo complementare non lo è; il semipiano $\{\operatorname{Re}z>0\}$ è un dominio non limitato.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §1.2 "Elementi di topologia" e §1.4 (limiti e continuità con la stessa definizione $\varepsilon$-$\delta$ del caso reale, Def. 1.26). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 12-16, 24-27).

## Prerequisiti
- [[Numeri complessi]]: modulo come distanza nel piano

## Porta a
- [[Funzione olomorfa]]: la derivata si definisce in un intorno
- [[Integrale di linea complesso]]: cammini e domini semplicemente connessi
- [[Trasformazioni di Möbius]]: immagini di cerchi e semipiani
- [[Serie di potenze]]: l'insieme di convergenza è un disco

## Collegati
- [[Punto di accumulazione]]: stessa nozione di intorno vista in $\mathbb R$

---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [bond convexity, convexity, approssimazione del secondo ordine del prezzo, convessità di portafoglio]
tags: [competenza, area/finanza]
---

# Convessità di un'obbligazione

> Derivata seconda relativa del prezzo rispetto al rendimento: corregge l'approssimazione della duration con un termine sempre positivo.

## Definizione / enunciato
Con gli stessi pesi $w_i=c_ie^{-yt_i}/B(y)$ della duration (def. c03-convessita):
$$C=\frac{B''(y)}{B(y)}=\frac{\sum_it_i^2c_ie^{-yt_i}}{B(y)}=\sum_iw_it_i^2\quad[\text{anni}^2].$$
Per uno ZCB con scadenza $T$, $C=T^2$. Vale $C-D^2\ge0$ (è una varianza delle date di pagamento).

**Approssimazione del secondo ordine** (prop. c03-approx-convessita):
$$B(y+\Delta y)\simeq B(y)\Big[1-D\,\Delta y+\tfrac12C(\Delta y)^2\Big],$$
con errore $O(|\Delta y|^3)$. Di portafoglio: $C_P=\sum_iw_iC_i$ con pesi di mercato.

## Formule chiave
$$\frac{\Delta B}{B}\simeq-D\,\Delta y+\tfrac12C(\Delta y)^2 .$$

## Intuizione
È lo sviluppo di Taylor al secondo ordine di $B(y)$. Poiché $B$ è convessa, la tangente (duration) sta sotto la curva: il termine $\frac12C(\Delta y)^2$ corregge verso l'alto sia per rialzi sia per ribassi dei tassi.

## Come si usa
Esempio del libro: tasso piatto 4%, bond a 3 anni con cedola 5: $D=2.86$, $C=8.40$; con $y'=5\%$ il prezzo esatto è $99.65$, primo ordine $99.61$, secondo ordine $99.66$ (errore $0.0004$ contro $0.04$). L'esempio è della lezione sulla duration.

## Nei corsi
- **Financial engineering** (magistrale): cap. 3 §Convessità e approssimazione del secondo ordine, es. c03-esame-duration (esempio della lezione SEM/09, nonostante il nome dell'etichetta). Fonti: `Libri/Financial engineering/capitoli/cap03.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/09 - lez 03 marzo c - esercizio bond duration.pdf`.

## Prerequisiti
- [[Duration]]: termine del primo ordine
- [[Rendimento a scadenza]]: $B(y)$ è convessa

## Porta a
- [[Immunizzazione]]: $f''(y)>0$ rende il valore minimo in $y_0$

## Collegati
- [[Formula di Taylor con resto di Lagrange]]: sviluppo al secondo ordine di $B(y)$
- [[Greche]]: analogo del gamma per le opzioni

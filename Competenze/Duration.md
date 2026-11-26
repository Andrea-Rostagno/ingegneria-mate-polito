---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [duration di Macaulay, Macaulay duration, durata media finanziaria, duration di portafoglio, duration nel tempo, sensibilità al tasso]
tags: [competenza, area/finanza]
---

# Duration

> Media delle date di pagamento di un'obbligazione pesate con il valore attuale dei flussi: misura la sensibilità del prezzo al rendimento.

## Definizione / enunciato
Per flussi $c_i$ alle date $t_i$ e rendimento $y$ (def. c03-duration, Macaulay in capitalizzazione continua):
$$D=\frac{\sum_{i=1}^nt_ic_ie^{-yt_i}}{B(y)}=\sum_iw_it_i,\qquad w_i=\frac{c_ie^{-yt_i}}{B(y)}.$$
- **Approssimazione** (prop. c03-approx-duration): $B'(y)=-D\,B(y)$, quindi $\Delta B/B\simeq-D\,\Delta y$ con errore $O((\Delta y)^2)$.
- **Portafoglio** (prop. c03-duration-portafoglio): $D_P=\sum_iw_iD_i$ con $w_i=a_iB_i(y)/V_P$ quote del **valore di mercato** (non del nominale).
- **Nel tempo** (prop. c03-duration-tempo): con $y$ costante e senza flussi in $(0,t]$, $D(t)=D(0)-t$; a ogni cedola la duration salta verso l'alto.

## Formule chiave
$$\frac{\Delta B}{B}\simeq-D\,\Delta y,\qquad D_{\text{ZCB}}=T,\qquad D_P=\sum_iw_iD_i .$$

## Intuizione
Più i flussi sono lontani, più il prezzo reagisce a una variazione dei tassi. La duration è il "baricentro temporale" dei flussi. Il libro usa solo la duration di Macaulay continua; la duration modificata $D/(1+y/m)$ non serve.

## Come si usa
Esempi del libro (lezioni): tasso piatto 4%, bond a 3 anni con cedola 5: $B=102.55$, $D=2.86$. Bond a 5 anni con cedola 10, $y=10\%$: $D(0)=4.16$, $D(0.5)=3.66$, dopo la prima cedola $3.48$ (non 3.16: salto di 0.32); con $y=6\%$ $D=4.23$, con $y=14\%$ $D=4.08$. Nella duration di portafoglio i pesi sono quote del valore di mercato: un flusso lontano è scontato di più e pesa meno del suo nominale.

## Nei corsi
- **Financial engineering** (magistrale): cap. 3 §§Duration, Portafogli di obbligazioni, Duration nel tempo. Fonti: `Libri/Financial engineering/capitoli/cap03.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/07 - lez 03 marzo a - bond yield duration.pdf`, `09 - lez 03 marzo c - esercizio bond duration.pdf`.

## Prerequisiti
- [[Rendimento a scadenza]]: $D$ è la derivata logaritmica di $B(y)$
- [[Zero-coupon bond]]: caso $D=T$

## Porta a
- [[Convessità di un'obbligazione]]: correzione del secondo ordine
- [[Immunizzazione]]: orizzonte uguale alla duration

## Collegati
- [[Derivata]]: $B'(y)=-DB(y)$
- [[Delta hedging]]: analogo per le opzioni (sensibilità al primo ordine)

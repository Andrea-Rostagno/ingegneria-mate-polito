---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [immunization, teorema di immunizzazione, immunizzazione finanziaria, copertura con la duration, duration matching, copertura dinamica con la duration]
tags: [competenza, area/finanza]
---

# Immunizzazione

> Scegliendo un orizzonte d'investimento uguale alla duration, il valore finale di un'obbligazione non diminuisce per spostamenti paralleli e istantanei del rendimento.

## Definizione / enunciato
Sia $f(y)=B(y)e^{yt}$ il valore all'istante $t$ di un investimento in un'obbligazione con flussi positivi, con rendimento piatto $y$ e cedole reinvestite al rendimento di mercato. Allora (teo. c03-immunizzazione)
$$f'(y)=B(y)e^{yt}\big(t-D(y)\big),\qquad f''(y)>0$$
(salvo uno ZCB con scadenza proprio $t$, per cui $f$ è costante). Se $t=D(y_0)$, $y_0$ è il punto di minimo di $f$:
$$B(y')e^{y't}\ge B(y_0)e^{y_0t}\quad\text{per ogni }y'.$$

## Formule chiave
Pesi per un orizzonte $H$ con due titoli: $w_A+w_B=1$, $D_Aw_A+D_Bw_B=H$.

## Intuizione
Se i tassi salgono il prezzo scende ma le cedole si reinvestono a un tasso più alto; se scendono accade il contrario. All'orizzonte $t=D$ i due effetti si compensano al primo ordine e la convessità fa il resto. Poiché la duration scende nel tempo in modo diverso dall'orizzonte e i tassi cambiano, serve **ribilanciare** (copertura dinamica).

## Come si usa
Esempio del libro (Capiński-Zastawniak): obiettivo 100000 \$ tra 3 anni, $y=12\%$, si investono $69767.63$; bond $A$ a 5 anni con cedola 10 ($B_A=90.27$, $D_A=4.12$) e ZCB $B$ a un anno ($88.69$): $w_A=(3-1)/(4.1224-1)=0.6405$, cioè 495.05 titoli $A$ e 282.77 titoli $B$; dopo un anno si ribilancia con orizzonte residuo 2. Nel caso del bond a 3 anni al 4%, il valore all'istante $t=D=2.86$ è $114.98$ sia con $y=4\%$ sia con $y'=5\%$ (correzione di un errore della lezione).

## Nei corsi
- **Financial engineering** (magistrale): cap. 3 §§Duration nel tempo e immunizzazione, Copertura dinamica con la duration; teo. c03-immunizzazione, es. c03-copertura-dinamica. Fonti: `Libri/Financial engineering/capitoli/cap03.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/09 - lez 03 marzo c - esercizio bond duration.pdf`, `15 - lez 06 marzo d - esempio hedging dinamico.pdf`.

## Prerequisiti
- [[Duration]]: orizzonte uguale alla duration
- [[Convessità di un'obbligazione]]: $f''>0$

## Collegati
- [[Cash flow matching]]: altra strategia di copertura delle passività
- [[Delta hedging]]: stessa idea di copertura al primo ordine con ribilanciamento

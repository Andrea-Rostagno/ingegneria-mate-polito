---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [butterfly, butterfly spread con call, butterfly spread con put, farfalla, convessità dei prezzi nello strike]
tags: [competenza, area/finanza]
---

# Butterfly spread

> Tre opzioni dello stesso tipo con strike equispaziati (+1, −2, +1): payoff a tenda centrato sullo strike medio, per chi si aspetta un prezzo finale stabile.

## Definizione / enunciato
Con $K_1<K_3$ e $K_2=\frac{K_1+K_3}2$, la **butterfly** con call è: call lunga in $K_1$, due call corte in $K_2$, call lunga in $K_3$ (def. c08-butterfly). Payoff
$$\varphi(S_T)=(S_T-K_1)^+-2(S_T-K_2)^++(S_T-K_3)^+=\begin{cases}0,&S_T\le K_1\\ S_T-K_1,&K_1<S_T\le K_2\\ K_3-S_T,&K_2<S_T\le K_3\\ 0,&S_T>K_3\end{cases}$$
una tenda con vertice in $K_2$ e altezza $K_2-K_1$; analoga con tre put.

**Costo con call e con put** (prop. c08-butterfly-costo): per $K_1<K_2<K_3$ qualunque
$$(c_1-2c_2+c_3)-(p_1-2p_2+p_3)=-(K_1-2K_2+K_3)e^{-rT},$$
quindi i due costi coincidono **se e solo se** gli strike sono equispaziati.

## Formule chiave
Payoff mai negativo ⇒ $c_1-2c_2+c_3\ge0$ (prezzi convessi nello strike).

## Intuizione
È un bull spread $K_1$-$K_2$ più un bear spread $K_2$-$K_3$. Se la call centrale quota più della media delle altre due, comprare la butterfly incassa denaro oggi senza poter perdere domani. Errore frequente (anche in una soluzione ufficiale, corretta nel libro): scrivere la parità con $S_0$ al posto di $K_ie^{-rT}$ e concludere che i costi coincidono per ogni scelta degli strike.

## Come si usa
Esempi del libro: call a 3 mesi con strike 15, 17.5, 20 a 4, 2, 0.5: costo 0.5, profitto massimo 2 in $S_T=17.5$, positivo per $15.5<S_T<19.5$. Call 40, 45, 50 a 7.00, 4.00, 0.80: $c_1-2c_2+c_3=-0.20<0$, arbitraggio comprando la butterfly.

## Nei corsi
- **Financial engineering** (magistrale): cap. 8 §Butterfly spread, def. c08-butterfly, prop. c08-butterfly-costo. Fonti: `Libri/Financial engineering/capitoli/cap08.tex`; nota di esercitazione `magistrale/Financial engineering/esercitazioni/Introduction_Serie5_ITA.pdf`.

## Prerequisiti
- [[Bull e bear spread]]: la butterfly ne è la somma
- [[Parità put-call]]: confronto dei costi

## Collegati
- [[Straddle e strangle]]: profilo opposto (scommessa sul movimento)
- [[Funzione convessa]]: convessità dei prezzi nello strike

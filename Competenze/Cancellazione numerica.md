---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["catastrophic cancellation", "cancellation", "perdita di cifre significative", "cancellazione"]
tags: [competenza, area/numerica]
---

# Cancellazione numerica

> Perdita di cifre significative quando si sottraggono due numeri di macchina vicini e affetti da errore di arrotondamento.

## Definizione / enunciato
Siano $\bar a_1=(-1)^{s_1}\bar p_1N^{q_1}$, $\bar a_2=(-1)^{s_2}\bar p_2N^{q_2}$ le rappresentazioni di macchina di $a_1,a_2$. La **cancellazione numerica** è una perdita di cifre della mantissa che si verifica sottraendo due rappresentazioni di macchina dello stesso segno, circa uguali e di cui almeno una affetta da arrotondamento:
$$s_1=s_2,\quad q_1=q_2,\quad \bar p_1\approx\bar p_2,\quad \bar p_1\ne p_1 \text{ e/o } \bar p_2\ne p_2.$$
Se la si può evitare riscrivendo l'espressione è eliminabile; altrimenti si dice **insita nel problema**.

## Formule chiave
Rimedi dalle slide:
$$\sqrt{x+\delta}-\sqrt x=\frac{\delta}{\sqrt{x+\delta}+\sqrt x}\quad(|\delta|\ll x)$$
$$\frac{e^x-1}{x}=1+\frac{x}{2!}+\frac{x^2}{3!}+\dots+\frac{x^{n-1}}{n!}+o(x^{n-1})\quad(x\to0)$$
$$\frac{1-\cos x}{x^2}=\frac12\Big(\frac{\sin(x/2)}{x/2}\Big)^2$$

## Intuizione
La sottrazione di macchina in sé è esatta a meno di $\varepsilon_m$: il danno viene dagli errori già presenti negli operandi, che restano gli stessi in assoluto mentre il risultato diventa piccolo, quindi il loro peso relativo esplode. È il mal condizionamento della somma di numeri opposti quasi uguali.

## Come si usa
Esempio ($N=10$, $t=5$): $a_1=0.157824831$, $a_2=0.157348212$ danno $\bar a_1\ominus\bar a_2=0.47000\cdot10^{-3}$ contro $0.476619\cdot10^{-3}$ esatto: tre cifre perse. Calcolando $((1+x)-1)/x$ per $x=10^{-k}$ l'errore passa da $8.9\cdot10^{-16}$ ($k=1$) a $1.1\cdot10^{-1}$ ($k=15$). Per $x=10^{-5}$ il valore di $(e^x-1)/x$ calcolato direttamente differisce di $9.7\cdot10^{-12}$ (relativo) da quello ottenuto con lo sviluppo di Taylor, che è affidabile.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 45-57, 64, 67-68).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): trattata come conseguenza della sottrazione di operandi arrotondati (esempio con $N=10$, $t=5$, $\varepsilon_m=0.5\cdot10^{-4}$; rimedi con manipolazione algebrica e sviluppi di Taylor). Il corso la ritrova nelle formule di derivazione numerica, dove il rapporto incrementale con $h$ piccolo sottrae valori quasi uguali. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 21-28); `triennale/ANNO 2/metodi numerici/CN_MAT_06_formule_derivazione.pdf` (p. 8-11).
- **Programmazione e calcolo scientifico** (triennale): appunti di geometria computazionale, "catastrophic cancellation": l'approssimazione di $x_1-x_2$ porta a una perdita dei numeri originali. Esempio con $t=3$, $\varepsilon_m=0.005$: $L_1=253.5$ cm, $L_2=252.4$ cm, arrotondati a $\bar L_1=254$, $\bar L_2=252$ cm, con errori relativi $0.002$ e $0.0015$ sotto $\varepsilon_m$; ma $L_1-L_2\approx1$ cm mentre $\bar L_1-\bar L_2\approx2$ cm, errore relativo $1\gg\varepsilon_m$. In $\mathbb R^2$ la terza componente del prodotto vettoriale $x_1y_2-x_2y_1$ può subire cancellazione se $x_1y_2\approx x_2y_1$, e l'area di un poligono può risultare sbagliata. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_2.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- [[Operazioni di macchina]]: sottrazione di macchina di operandi arrotondati

## Porta a
- Nessuno.

## Collegati
- [[Formule di derivazione numerica]]: con h troppo piccolo il rapporto incrementale soffre di cancellazione (Metodi numerici)
- [[Condizionamento di un problema numerico]]: somma mal condizionata di numeri opposti quasi uguali
- [[Stabilità di un algoritmo]]: l'algoritmo per pi è instabile per cancellazione
- [[Sviluppi di Maclaurin]]: lo sviluppo di $e^x$ e $\cos x$ in 0 elimina la cancellazione

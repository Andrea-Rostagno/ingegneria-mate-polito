---
tipo: competenza
area: statistica
corsi: [Prova finale]
livello: [triennale]
aliases: ["pseudo-observations", "pseudo-osservazioni", "ranghi normalizzati", "normalized ranks", "rank transformation", "trasformazione basata sui ranghi", "normalizzazione empirica", "ECDF transform", "u_i = rank/(n+1)"]
tags: [competenza, area/statistica]
---

# Pseudo-osservazioni

> Le osservazioni portate in $(0,1)$ con i ranghi, $u_i=R_i/(n+1)$: una versione empirica della trasformazione integrale di probabilità che non richiede di conoscere le marginali.

## Definizione / enunciato
Dato il campione $(X_1,Y_1),\dots,(X_n,Y_n)$ di una coppia continua, siano $R_i$ il rango di $X_i$ fra $X_1,\dots,X_n$ e $S_i$ quello di $Y_i$ (ranghi ben definiti perché i pareggi hanno probabilità zero). Le pseudo-osservazioni sono
$$(U_i,V_i)=\Big(\frac{R_i}{n+1},\frac{S_i}{n+1}\Big),$$
ossia (a meno del fattore $n/(n+1)$) i valori della f.d.r. empirica $F_{X,n}(x)=\frac1n\sum_i\mathbb 1(X_i\le x)$ nei punti del campione (Pellerey, slide 32, 90).

## Formule chiave
- Tesi (§4.4.2): $u_i=\dfrac{\operatorname{rank}(x_i)}{n+1}$, in Python `stats.rankdata(x) / (len(x) + 1)`.
- Il denominatore $n+1$ tiene i valori strettamente dentro $(0,1)$, dove le log-densità di copula sono finite.

## Intuizione
Per l'invarianza delle copule, i ranghi contengono tutta l'informazione sulla dipendenza: si buttano via le marginali e si tiene l'ordine. Lo scatter dei ranghi normalizzati mostra la copula "a occhio" (Pellerey, slide 34-36, log-rendimenti di Intel e Microsoft).

## Come si usa
La tesi confronta due trasformazioni uniformi delle serie Open e Close (fig. 4.1; il testo parla di rendimenti, il codice usa le volatilità rolling `vol_returns`):
1. **parametrica**: CDF della marginale migliore per AIC (normale o t);
2. **empirica**: ranghi.
Sceglie la **normalizzazione empirica** perché non richiede assunzioni sulla distribuzione, evita la cattiva specificazione delle marginali e conserva la struttura nelle code. È anche la trasformazione usata sulle volatilità rolling prima di ogni stima (§5.3.2, parte 3; scatter in fig. 5.2).

## Nei corsi
- **Prova finale** (triennale): §4.4 "Stima delle distribuzioni marginali e trasformazione uniforme". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4.2, pp. 33-34; §5.3.2, p. 70); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 32-36, 90).

## Prerequisiti
- [[Campione casuale]]: f.d.r. empirica del campione
- [[Trasformazione integrale di probabilità]]: versione teorica di $F(X)$
- [[Statistiche d'ordine]]: ranghi delle osservazioni

## Porta a
- [[Massima pseudo-verosimiglianza]]: si massimizza la verosimiglianza della copula sui ranghi
- [[Bontà di adattamento di una copula]]: copula empirica costruita sui ranghi

## Collegati
- [[Metodo IFM]]: alternativa con marginali parametriche
- [[Invarianza delle copule per trasformazioni crescenti]]: perché i ranghi bastano
- [[Volatilità rolling]]: variabili trasformate nella tesi

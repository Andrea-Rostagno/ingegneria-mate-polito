---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Spearman's rho", "rho di Spearman", "correlazione di Spearman", "Spearman correlation", "indice di concordanza di Spearman", "correlazione dei ranghi", "rank correlation coefficient"]
tags: [competenza, area/probabilita]
---

# Rho di Spearman

> Correlazione dei ranghi: in termini di copula è il volume (riscalato) fra la copula e l'indipendenza, $\rho_C=12\iint(C(u,v)-uv)\,du\,dv$.

## Definizione / enunciato
**Versione campionaria** (Pellerey, slide 66): $\rho=1-\dfrac{6\sum_id_i^2}{n(n^2-1)}$, $d_i=\operatorname{rank}(x_i)-\operatorname{rank}(y_i)$; in forma equivalente (slide 93) $\rho_n=\dfrac{12}{(n+1)(n-1)}\sum_iR_iS_i-3\dfrac{n+1}{n-1}$.
**Versione di popolazione**: con $(X_1,Y_1),(X_2,Y_2),(X_3,Y_3)$ indipendenti con legge $F$,
$$\rho_{X,Y}=3\big(\mathbb P[(X_1-X_2)(Y_1-Y_3)>0]-\mathbb P[(X_1-X_2)(Y_1-Y_3)<0]\big).$$
**Teorema** (Nelsen, Thm 5.1.6; tesi §5.2.4):
$$\rho_C=12\iint_{I^2}C(u,v)\,du\,dv-3=12\iint_{I^2}\big(C(u,v)-uv\big)\,du\,dv .$$

## Formule chiave
- FGM (Pellerey, slide 68): $\rho(\theta)=\theta/3$ e $\tau(\theta)=2\theta/9$; la slide dà come intervalli $[-2/9,2/9]$ per $\tau$ e $[-1/9,1/9]$ per $\rho$ (da verificare sul PDF: con $\theta\in[-1,1]$, $\theta/3$ darebbe $[-1/3,1/3]$). In ogni caso la FGM copre solo dipendenze deboli.
- Test di indipendenza: se il campione viene da $\Pi$, $\rho_n\approx\mathcal N\big(0,\frac1{n-1}\big)$ (slide 93).
- Indice di Schweizer-Wolff (slide 72): $\sigma_C=12\iint|C-uv|$ vale 0 se e solo se c'è indipendenza.

## Intuizione
Il primo integrale è il volume sotto il grafico della copula; sottrarre il volume di $\Pi$ misura la "distanza media" fra la dipendenza osservata e l'indipendenza (tesi: valori elevati indicano forte dipendenza monotona). Come $\tau$, è invariante per trasformazioni crescenti e non richiede momenti finiti; a differenza di Schweizer-Wolff può valere 0 anche senza indipendenza.

## Come si usa
Sulle volatilità rolling di Open e Close del DAX la tesi calcola con `stats.spearmanr` $\rho_S=0.8424$, accanto a Pearson 0.8873 e Kendall 0.6598 (tab. 5.6), come valori di partenza per la stima. Pellerey (slide 96) nota che il metodo dei momenti si può basare anche su $\rho_S$ invece che su $\tau$.

## Nei corsi
- **Prova finale** (triennale): definizione in termini di copula e valore sul DAX. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§5.2.4, p. 50; tab. 5.6, p. 72); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 66-68, 72, 93, 96); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Thm 5.1.6).

## Prerequisiti
- [[Copula]]: $\rho_S$ è un funzionale di $C$
- [[Invarianza delle copule per trasformazioni crescenti]]: misura sui ranghi
- [[Statistiche d'ordine]]: ranghi delle osservazioni

## Porta a
- [[Metodo dei momenti]]: variante basata su $\rho_S$

## Collegati
- [[Tau di Kendall]]: misura di concordanza gemella
- [[Coefficiente di correlazione]]: contrasto, misura solo la dipendenza lineare e non è invariante per trasformazioni crescenti
- [[Limiti di Fréchet-Hoeffding]]: distanza dalla copula $\Pi$

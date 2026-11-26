---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["SRM", "minimizzazione del rischio strutturale", "structural risk minimisation", "garanzia di SRM", "SRM learning guarantee"]
tags: [competenza, area/data-ml]
---

# Structural risk minimization

> Metodo di selezione del modello che, su una successione di classi annidate, minimizza l'errore empirico più una penalità di complessità della classe.

## Definizione / enunciato
(Vapnik, 1995; Vapnik e Chervonenkis, 1974) Si decompone $H=\bigcup_{k\ge1}H_k$ con $H_1\subset H_2\subset\dots\subset H_k\subset\dots$ e si sceglie
$$h^*=\arg\min_{h\in H_k,\,k\ge1}\ \hat R(h)+\mathrm{pen}(k,m).$$
Forma precisa: detto $H_{k(h)}$ il più semplice insieme che contiene $h$,
$$h_{\rm srm}=\arg\min_{h\in H_k,\,k\ge1}F_k(h),\qquad F_k(h)=\hat R(h)+\mathfrak R_m(H_k)+\sqrt{\frac{\log k}{m}}+\sqrt{\frac{\log\frac2\delta}{2m}} ,$$
assumendo che esista $h^*\in H$ con $\hat R(h^*)=\inf_{h\in H}\hat R(h)$ (così nella slide).

## Formule chiave
**Teorema (garanzia di SRM).** Per ogni $\delta>0$, con probabilità almeno $1-\delta$ su $S\sim D^m$:
$$R(h_{\rm srm})\le\hat R(h)+2\mathfrak R_m(H_{k(h)})+\sqrt{\frac{\log k(h)}{m}}+\sqrt{\frac{2\log\frac3\delta}{m}}$$
(così nella slide, con $h$ generico a destra; nel libro il bound vale per ogni $h\in H$, da verificare su `FML.pdf` §4.3).
Nella prova, union bound su $k$ e Hoeffding danno
$$\Pr\Big[\sup_{h\in H}R(h)-F_{k(h)}(h)>\epsilon\Big]\le\sum_{k=1}^\infty e^{-2m\epsilon^2}e^{-2\log k}=\frac{\pi^2}{6}e^{-2m\epsilon^2}\le2e^{-2m\epsilon^2}.$$

## Intuizione
Al crescere di $k$ l'errore di training scende e la penalità sale: SRM sceglie il punto di minimo della somma (curva a U della figura "training error + penalty"). Il termine $\sqrt{\log k/m}$ è il prezzo per non conoscere in anticipo la classe giusta: il bound è quasi lo stesso che si avrebbe conoscendo $k(h^*)$.

## Come si usa
Garanzie forti ma: (1) SRM è in genere computazionalmente intrattabile; (2) bisogna scegliere le $H_k$. Si richiede una decomposizione numerabile con complessità di Rademacher convergente; se $H$ contiene il classificatore di Bayes basta considerare un numero finito di classi. Le alternative pratiche sono la cross-validation e la regolarizzazione.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 13-20) = `MIA_01W.pdf` (p. 141-148); `MIA_01W.pdf` (p. 25); `FML.pdf` §4.3.

## Prerequisiti
- [[Empirical risk minimization]]: SRM aggiunge una penalità all'errore empirico
- [[Complessità di Rademacher]]: la penalità è $\mathfrak R_m(H_k)$
- [[Disuguaglianza di Hoeffding]]: nella dimostrazione della garanzia

## Porta a
- [[Regolarizzazione]]: estensione a un'unione non numerabile di classi
- [[Metodi di stima dell'accuratezza]]: la cross-validation come alternativa

## Collegati
- [[Errore di stima ed errore di approssimazione]]: SRM bilancia i due termini
- [[Dimensione VC]]: classi annidate di VC crescente

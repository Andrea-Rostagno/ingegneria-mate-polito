---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Neumann series criterion", "criterio di Neumann", "serie di Neumann per operatori", "Neumann series in Banach algebras", "insieme degli isomorfismi aperto", "I(X)"]
tags: [competenza, area/analisi]
---

# Criterio di invertibilità di Neumann

> Se $\|T\|_{op}<1$ su uno spazio di Banach, $\mathrm{id}-T$ è invertibile e l'inverso è la serie geometrica $\sum T^n$; ne segue che gli operatori invertibili formano un aperto.

## Definizione / enunciato
**Teor. 7.42.** Sia $X$ di Banach e $T\in\mathcal B(X)$ con $\|T\|_{op}<1$. Allora $\mathrm{id}_X-T$ è un isomorfismo e
$$(\mathrm{id}_X-T)^{-1}=\sum_{n=0}^\infty T^n\quad(\text{convergenza in }\mathcal B(X)),\qquad\|(\mathrm{id}_X-T)^{-1}\|_{op}\le\frac1{1-\|T\|_{op}}.$$
**Cor. 7.43.** (i) Se $R\in\mathcal B(X)$ è un isomorfismo e $\|R-T\|_{op}<1/\|R^{-1}\|_{op}$, allora $T$ è un isomorfismo. (ii) $\mathcal I(X)=\{T\in\mathcal B(X):T\text{ isomorfismo}\}$ è aperto in $\mathcal B(X)$.

## Formule chiave
Per submoltiplicatività $\|T^n\|_{op}\le\|T\|_{op}^n$, quindi la serie converge assolutamente nel Banach $\mathcal B(X)$; il prodotto telescopico dà $(\mathrm{id}-T)\sum_{n\le N}T^n=\mathrm{id}-T^{N+1}\to\mathrm{id}$.
In dimensione finita: $\mathcal I(X)=\{T:\det T\ne0\}$.

## Intuizione
È la serie geometrica $\frac1{1-t}=\sum t^n$ con un operatore al posto del numero $t$, $|t|<1$. Il Cor. 7.43 dice che un piccolo disturbo di un operatore invertibile resta invertibile: $T=R(\mathrm{id}-R^{-1}(R-T))$.

## Come si usa
- Per risolvere $x-Tx=y$ con $\|T\|_{op}<1$: $x=\sum_nT^ny$ (iterazione di punto fisso).
- Nella teoria spettrale: se $|\lambda|>\|T\|_{op}$, $T-\lambda I=-\lambda(I-T/\lambda)$ è invertibile, quindi $\sigma(T)\subseteq\overline B(0,\|T\|_{op})$; l'apertura di $\mathcal I(X)$ dà la chiusura dello spettro.

## Nei corsi
- **Analisi funzionale** (triennale): §7.5 (Teor. 7.42, Cor. 7.43). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 111-113); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (p. 14).

## Prerequisiti
- [[Spazio di Banach]]: convergenza della serie in B(X)
- [[Operatore lineare limitato]]: submoltiplicatività della norma
- [[Serie geometrica]]: stessa formula nel caso scalare

## Porta a
- [[Spettro di un operatore limitato]]: lo spettro è chiuso e limitato

## Collegati
- [[Operatore di evoluzione temporale]]: in Quantum physics la serie di Neumann risolve l'equazione integrale dell'evoluzione
- [[Metodo del punto fisso]]: x = y + Tx risolto per iterazione

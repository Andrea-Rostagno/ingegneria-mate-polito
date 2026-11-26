---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi funzionale]
livello: [triennale]
aliases: ["Lp spaces", "spazi di Lebesgue", "L^p", "L^1", "L^infinito", "estremo superiore essenziale", "essential supremum", "funzione essenzialmente limitata"]
tags: [competenza, area/analisi]
---

# Spazi Lp

> Gli spazi delle (classi di) funzioni misurabili con $|f|^p$ integrabile, identificate quando coincidono quasi ovunque; su uno spazio di misura finita sono inscatolati.

## Definizione / enunciato
Per $p\ge1$: $\mathcal L^p(X,\mathcal A,\mu)=\{f\text{ misurabile}:\int_X|f|^p\,d\mu<+\infty\}$. Poiché $\int|f|^pd\mu=0\iff f=0$ q.o., si passa al quoziente per $f\sim g\iff f=g$ q.o.:
$$L^p=\mathcal L^p/\!\sim,\qquad \|f\|_{L^p}=\Big(\int_X|f|^p\,d\mu\Big)^{1/p}.$$
**Estremo superiore essenziale**: $\operatorname{Ess\,Sup}(f)=\inf\{M>0:\mu(\{|f|>M\})=0\}$ ($\inf\emptyset=+\infty$); $f$ è essenzialmente limitata se è finito. $L^\infty=\mathcal L^\infty/\!\sim$ con $\|f\|_\infty=\operatorname{Ess\,Sup}(f)$.

## Formule chiave
**Teorema.** Se $\mu(X)<+\infty$ e $q\ge p\ge1$:
$$L^\infty\subseteq L^q\subseteq L^p\subseteq L^1.$$

## Intuizione
Gli elementi di $L^p$ sono classi di equivalenza, ma si lavora con un rappresentante definito q.o. L'Ess Sup ignora i valori presi su insiemi trascurabili.

## Come si usa
Esempio della lezione 11: $f(x)=n$ se $x=\frac1n$, $f=1$ altrove, è illimitata ma $\operatorname{Ess\,Sup}(f)=1$ (i punti $\frac1n$ hanno misura nulla). In probabilità ($\mathbb P(\Omega)=1$) l'inclusione dice che una v.a. con momento finito di ordine $p$ ha anche media finita; $L^2$ è lo spazio delle v.a. con varianza.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 11; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione11(11-05-23).pdf` (lezione 11, pp. 12-13).
- **Analisi funzionale** (triennale): §5.2. Per $p\in[1,\infty]$ $\mathcal L^p$ è un sottospazio vettoriale delle funzioni misurabili (Minkowski), con $\|f\|_\infty=\operatorname{ess\,sup}|f|=\inf\{\lambda:\mu\{|f|>\lambda\}=0\}$; il quoziente $L^p=\mathcal L^p/\!\sim$ è normato (Lemma 5.28) e **di Banach** per ogni $p\in[1,\infty]$ (Teor. 5.29). Se $f_n\to f$ in $L^p$, una sottosuccessione converge q.o. (Prop. 5.32(i)). Su misura finita, per $p\le q$: $\|f\|_p\le\mu(M)^{1/p-1/q}\|f\|_q$ (Prop. 5.34, da Hölder), inclusioni opposte a quelle degli $\ell^p$; $C[a,b]$ è chiuso in $L^\infty(a,b)$ ma denso e non chiuso in $L^p(a,b)$ per $p<\infty$. $\ell^p=L^p(\mathbb N,\mathcal P(\mathbb N),\#)$; $L^2$ è uno spazio di Hilbert. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 53-60); `triennale/ANNO 3/analisi funzionale/04_spaziLp_handout.pdf` (pp. 5-10).

## Prerequisiti
- [[Integrale di Lebesgue]]: integrabilità di |f|^p
- [[Disuguaglianza di Minkowski]]: rende ‖·‖p una norma (Analisi funzionale)

## Porta a
- [[Varianza]]: X in L^2
- [[Sottospazi densi di Lp]]: funzioni semplici e continue dense per p finito (Analisi funzionale)
- [[Duale degli spazi Lp]]: Lp' = Lq per p finito (Analisi funzionale)

## Collegati
- [[Spazio vettoriale]]: quoziente normato
- [[Spazio di Banach]]: Lp è completo (Analisi funzionale)
- [[Spazi di successioni lp]]: ℓp è Lp con la misura che conta (Analisi funzionale)

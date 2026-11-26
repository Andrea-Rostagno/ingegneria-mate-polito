---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["bounded linear operator", "operatore limitato", "norma operatoriale", "operator norm", "B(X,Y)", "operatore continuo", "operatore illimitato", "unbounded operator", "submoltiplicatività della norma operatoriale"]
tags: [competenza, area/analisi]
---

# Operatore lineare limitato

> Un'applicazione lineare fra spazi normati che non amplifica la norma più di una costante: per gli operatori lineari, limitato, lipschitziano e continuo sono la stessa cosa.

## Definizione / enunciato
Siano $X,Y$ normati e $T\in\mathcal L(X,Y)$. La **norma operatoriale** è
$$\|T\|_{op}=\inf\{C\ge0:\ \|Tx\|_Y\le C\|x\|_X\ \forall x\}=\sup_{\|x\|_X\le1}\|Tx\|_Y=\sup_{x\ne0}\frac{\|Tx\|_Y}{\|x\|_X}.$$
$T$ è **limitato** se $\|T\|_{op}<\infty$; $\mathcal B(X,Y)$ è l'insieme degli operatori limitati.
**Prop. 7.6.** Sono equivalenti: (i) $T$ limitato; (ii) lipschitziano; (iii) uniformemente continuo; (iv) continuo; (v) continuo in 0. Allora $\|Tx\|_Y\le\|T\|_{op}\|x\|_X$.

## Formule chiave
- $\|ST\|_{op}\le\|S\|_{op}\|T\|_{op}$ (submoltiplicatività); $\|\cdot\|_{op}$ è una norma su $\mathcal B(X,Y)$.
- Se $Y$ è di Banach, $(\mathcal B(X,Y),\|\cdot\|_{op})$ è di Banach.
- Se $\dim X<\infty$, $\mathcal B(X,Y)=\mathcal L(X,Y)$ (Prop. 7.9).
- $\operatorname{Ker}T$ è chiuso e il grafico $\Gamma(T)$ è chiuso in $X\times Y$ (Prop. 7.13).

## Intuizione
Per la linearità basta controllare $T$ sulla palla unitaria: la norma operatoriale è il massimo "fattore di allungamento". In dimensione infinita esistono operatori lineari illimitati, tipicamente le derivate.

## Come si usa
Esempi (Es. 7.8): $\|\mathrm{id}_X\|_{op}=1$; valutazione $V_pf=f(p)$ su $C(M)$ con norma 1; $\langle\cdot,y\rangle$ ha norma $\|y\|$; moltiplicazione $D_w$ su $\ell^2$ con norma $\|w\|_\infty$; operatori integrali; proiezioni sui fattori di $X\times Y$. **Non esempio:** $S_pf=f'(p)$ su $C^1[a,b]$ con la norma del sup è lineare ma illimitato ($\|S_p\|_{op}=\infty$).

## Nei corsi
- **Analisi funzionale** (triennale): §7.1 (Def. 7.1-7.3, Lemma 7.5, Prop. 7.6, Es. 7.8, Prop. 7.9-7.14). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 89-99); `triennale/ANNO 3/analisi funzionale/06_operatorilimitati_handout.pdf` (pp. 2-7).

## Prerequisiti
- [[Applicazione lineare]]: operatore lineare fra spazi vettoriali
- [[Spazio normato]]: norme su dominio e codominio
- [[Funzione lipschitziana tra spazi metrici]]: limitato equivale a lipschitziano

## Porta a
- [[Operatore integrale]]: esempio fondamentale
- [[Isometria lineare]]: operatori che conservano la norma
- [[Estensione per continuità]]: da un sottospazio denso
- [[Teorema di Banach-Steinhaus]]: limitatezza uniforme
- [[Teorema dell'isomorfismo di Banach]]: inverso limitato
- [[Criterio di invertibilità di Neumann]]: serie di potenze di T
- [[Operatore coercivo in norma]]: criterio di invertibilità
- [[Forma sesquilineare]]: F_A(x,y) = ⟨Ax,y⟩
- [[Operatore compatto]]: sottoclasse di B(X,Y)

## Collegati
- [[Norme matriciali]]: norma indotta in dimensione finita
- [[Spazio duale]]: X' = B(X,F)

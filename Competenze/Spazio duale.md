---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale, Analisi funzionale]
livello: [triennale]
aliases: ["dual space", "V*", "base duale", "dual basis", "covettore", "covector", "applicazione duale", "dual map", "trasposta di un'applicazione lineare", "duale topologico", "topological dual", "X'", "funzionale lineare continuo", "duale algebrico"]
tags: [competenza, area/algebra-geometria]
---

# Spazio duale

> È lo spazio $V^*$ dei funzionali lineari su $V$. Ogni base di $V$ ne induce una di $V^*$, e ogni applicazione lineare ne induce una "all'indietro" tra i duali, rappresentata dalla trasposta.

## Definizione / enunciato
$$V^*=\{f:V\to\mathbb R\ \text{lineare}\},$$
con le operazioni $(f+g)(v)=f(v)+g(v)$ e $(af)(v)=af(v)$. I suoi elementi si chiamano **covettori**.

**Base duale.** Data una base $(e_1,\dots,e_n)$ di $V$, $e_i^*$ è l'unica applicazione lineare con $e_i^*(e_k)=\delta^i_k$; quindi $e_i^*(v)=v_i$, la componente $i$-esima di $v$.

**Proposizione (dimostrata).** $(e_1^*,\dots,e_n^*)$ è una base di $V^*$, e quindi $\dim V^*=\dim V$.
- Indipendenza: se $\sum a_ie_i^*=0$, valutando in $e_k$ si ottiene $a_k=0$.
- Generatori: ogni $f$ si scrive $f=\sum_i f(e_i)\,e_i^*$, perché le due applicazioni coincidono sulla base.

**Applicazione duale.** Una $f:V\to W$ lineare induce $f^*:W^*\to V^*$, $f^*(\theta)=\theta\circ f$.

## Formule chiave
$$e_i^*(e_k)=\delta^i_k,\qquad f=f(e_i)\,e_i^*,\qquad A^*=A^T$$
Nelle basi duali la matrice di $f^*$ è la trasposta di quella di $f$:
$$A^*_{ji}=\tilde e_i^*(f(e_j))=A_{ij}.$$

## Intuizione
Un covettore "misura" i vettori. La base duale è fatta delle funzioni coordinate. In seguito $dx_1,\dots,dx_n$ saranno proprio la base duale di $\partial_{x_1},\dots,\partial_{x_n}$, e il pull-back $f^*$ sarà l'applicazione duale del differenziale $f_*$.

## Come si usa
È il primo richiamo di algebra del corso. Serve per:
- definire i tensori come applicazioni multilineari su $V$ e $V^*$;
- definire le forme differenziali come campi di covettori;
- dimostrare che il pull-back ha matrice $J^T$ (L16 pp. 15-16).

Notazione: da L10 in poi la base duale si scrive anche $e^i$, con l'indice in alto.

## Nei corsi
- **Geometria differenziale** (triennale): fonti `triennale/ANNO 2/geometria differenziale/Lezione09_GD.pdf` (pp. 1-6); `triennale/ANNO 2/geometria differenziale/Lezione11_GD.pdf` (pp. 1-2).
- **Analisi funzionale** (triennale): cap. 8. Accanto al duale algebrico $\mathcal L(X,\mathbb F)$ si usa il **duale topologico** $X'=\mathcal B(X,\mathbb F)$ dei funzionali lineari continui, con $\|\varphi\|_{X'}=\sup_{\|x\|\le1}|\varphi(x)|$; $X'$ è **di Banach** per ogni normato $X$, e in dimensione finita i due duali coincidono (in $\mathbb F^n$ euclideo i funzionali sono vettori riga). Esempi (Es. 8.5): valutazione $V_p\in C(M)'$ di norma 1; $\langle\cdot,y\rangle\in H'$ di norma $\|y\|$; $\varphi_y(x)=\sum x_ky_k$ su $\ell^p$ e $\varphi_g(f)=\int fg\,d\mu$ su $L^p$ con norma $\le\|y\|_q$, $\|g\|_q$. Identificazioni: $H'\cong H$ (Riesz-Fréchet), $(\ell^p)'\cong\ell^q$, $L^p(M)'\cong L^q(M)$; per Hahn-Banach $X'\ne\{0\}$ separa i punti. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§8.1, pp. 114-115); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (pp. 2-3).

## Prerequisiti
- [[Base e dimensione]]: la base duale ha n elementi
- [[Applicazione lineare]]: i covettori sono applicazioni lineari a valori reali

## Porta a
- [[Tensore]]: prodotto tensoriale di covettori
- [[Forma differenziale]]: campo di covettori, base dx_i
- [[Pull-back]]: applicazione duale del differenziale
- [[Teorema di rappresentazione di Riesz-Fréchet]]: duale di uno spazio di Hilbert (Analisi funzionale)
- [[Duale degli spazi Lp]]: duale di ℓp e Lp (Analisi funzionale)
- [[Teorema di Hahn-Banach]]: estensione di funzionali continui (Analisi funzionale)
- [[Spazio riflessivo]]: biduale e immersione canonica (Analisi funzionale)

## Collegati
- [[Matrice associata a un'applicazione lineare]]: la duale è rappresentata dalla trasposta
- [[Operatore lineare limitato]]: X' = B(X, F) con la norma operatoriale (Analisi funzionale)
- [[Norma duale]]: la norma di X' è la norma duale (Analisi funzionale)

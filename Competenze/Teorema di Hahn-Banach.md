---
tipo: competenza
area: analisi
corsi: [Analisi funzionale]
livello: [triennale]
aliases: ["Hahn-Banach theorem", "estensione di funzionali", "extension of functionals", "i funzionali separano i punti", "norma per dualità nel biduale"]
tags: [competenza, area/analisi]
---

# Teorema di Hahn-Banach

> Ogni funzionale lineare continuo su un sottospazio si estende a tutto lo spazio normato con la stessa norma: il duale è "ricco" e separa i punti.

## Definizione / enunciato
**Teor. 8.31.** Sia $X$ normato, $V\subseteq X$ un sottospazio (con la norma indotta) e $\varphi\in V'$. Esiste $\widetilde\varphi\in X'$ con
$$\widetilde\varphi|_V=\varphi,\qquad\|\widetilde\varphi\|_{X'}=\|\varphi\|_{V'}.$$
Se $V$ è denso l'estensione è unica (estensione per continuità); altrimenti in generale no.

## Formule chiave
Cor. 8.36: (i) per $x\ne0$ esiste $\varphi\in X'$ con $\|\varphi\|=1$, $\varphi(x)=\|x\|$; (ii)
$$\|x\|_X=\max\{|\varphi(x)|:\ \varphi\in X',\ \|\varphi\|_{X'}\le1\};$$
(iii) i funzionali separano i punti; (iv) $X\ne\{0\}\Rightarrow X'\ne\{0\}$.
Cor. 8.39: se $d(x,V)>0$ esiste $\varphi$ con $\|\varphi\|=1$, $\varphi|_V=0$, $\varphi(x)=d(x,V)$; se $V$ è chiuso proprio esiste $\varphi\ne0$ nulla su $V$.
Cor. 8.41: $X'$ separabile $\Rightarrow$ $X$ separabile. Prop. 8.42: $\ell^\infty$ non separabile, $\ell^p$ ($p<\infty$) e $c_0$ separabili. Cor. 8.44: $(\ell^\infty)'\not\cong\ell^1$.

## Intuizione
Dimostrazione (caso reale): si estende di una dimensione alla volta, da $V$ a $V\oplus\mathbb Ry$ con $\widetilde\varphi(v+\alpha y)=\varphi(v)+\alpha\lambda$, scegliendo $\lambda$ tra $\sup_v(-\varphi(v)-\|v+y\|)$ e $\inf_v(-\varphi(v)+\|v+y\|)$ (possibile per la disuguaglianza triangolare); poi il **lemma di Zorn** fornisce un'estensione massimale, che è definita su tutto $X$.

## Come si usa
- Il Cor. 8.36(ii) è il duale della formula $\|\varphi\|=\sup_{\|x\|\le1}|\varphi(x)|$ e dice che l'immersione canonica $J:X\to X''$ è isometrica.
- Unicità del limite debole: i funzionali separano i punti.
- Argomenti di separabilità per mostrare che due spazi non sono isomorfi.

## Nei corsi
- **Analisi funzionale** (triennale): §8.5 "Estensione di funzionali: il teorema di Hahn-Banach" (Teor. 8.31, Oss. 8.32-8.33, dimostrazione con Zorn, Cor. 8.36, 8.39, 8.41, Prop. 8.42, Cor. 8.44). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 126-132); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (pp. 10-11).

## Prerequisiti
- [[Spazio duale]]: si estendono elementi di V'
- [[Spazio normato]]: ambiente del teorema
- [[Lemma di Zorn]]: passaggio dall'estensione di una dimensione al caso generale

## Porta a
- [[Spazio riflessivo]]: l'immersione canonica è un'isometria
- [[Convergenza debole in spazi normati]]: unicità del limite debole

## Collegati
- [[Estensione per continuità]]: caso di un sottospazio denso, con unicità
- [[Teoremi di separazione]]: versione geometrica (iperpiani che separano convessi)
- [[Spazio separabile]]: X' separabile implica X separabile

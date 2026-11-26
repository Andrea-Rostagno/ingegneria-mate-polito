---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["path-connected space", "spazio connesso per archi", "arco congiungente", "punti congiungibili", "componente connessa per archi", "path component", "concatenazione di archi", "seno del topologo", "topologist's sine curve"]
tags: [competenza, area/algebra-geometria]
---

# Connessione per archi

> Uno spazio è connesso per archi se due punti qualsiasi si congiungono con un cammino continuo $[0,1]\to X$: è più forte della connessione, e la curva $\sin(1/x)$ mostra che non vale il viceversa.

## Definizione / enunciato
Posto $I=[0,1]$, $p,q\in X$ sono **congiungibili** se esiste $\alpha:(I,\mathcal E_1)\to(X,\tau)$ continua con $\alpha(0)=p$, $\alpha(1)=q$ (un **arco**); $X$ è **connesso per archi** se ogni coppia di punti è congiungibile (Def. 6.17). Le **componenti connesse per archi** sono le classi della relazione di equivalenza "essere congiungibili" (Def. 6.19).
- **Prop. 6.18.** $X$ è connesso per archi se e solo se esiste $p_0$ congiungibile con ogni $p\in X$.
- **Prop. 6.21.** Connesso per archi $\Rightarrow$ connesso.
- **Prop. 6.23.** L'immagine continua di un connesso per archi è connessa per archi; $X\times Y$ è connesso per archi se e solo se lo sono $X$ e $Y$.

## Formule chiave
Concatenazione di archi con $\alpha(1)=\beta(0)$:
$$(\alpha*\beta)(t)=\begin{cases}\alpha(2t)&0\le t\le\frac12\\ \beta(2t-1)&\frac12\le t\le1\end{cases}$$
Dimostrazione di 6.21: se $A_1,A_2$ sconnettono $X$ e $\alpha$ congiunge $p_1\in A_1$ con $p_2\in A_2$, allora $\alpha^{-1}(A_1)$ e $\alpha^{-1}(A_2)$ sconnettono $I$, assurdo.

## Intuizione
Connessione per archi è la versione "camminabile" della connessione. La chiusura del grafico di $\sin(1/x)$, $x>0$, è connessa (chiusura di un connesso) ma non si riesce a camminare dal segmento $\{0\}\times[-1,1]$ al grafico: vicino a $x=0$ la funzione oscilla troppo (Es. 6.22).

## Come si usa
- $\mathbb R^n$, i sottospazi vettoriali e i convessi sono connessi per archi con $\alpha(t)=(1-t)x+ty$; anche $(C^0([0,1]),d_{L^\infty})$ con $\alpha_t=(1-t)f+tg$ (Es. 6.20).
- Il grafico di una funzione continua su un intervallo è connesso per archi (immagine di $t\mapsto(t,f(t))$).
- L'Es. 6.22 mostra anche che la chiusura di un connesso per archi può non esserlo e che le componenti per archi possono non essere chiuse.
- $GL_2(\mathbb R)$ ha esattamente due componenti per archi, $GL^+$ e $GL^-$: ogni $M\in GL^+$ si congiunge con $\pm I_2$ con archi del tipo $(1-t)M\pm tI_2$, e $-I_2$ con $I_2$ tramite le rotazioni (Es. 6.25).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punto 14 della lista delle dimostrazioni per l'orale (Prop. 6.21 e 6.23). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§6.4, Def. 6.17-6.19, Prop. 6.18-6.23, Es. 6.20-6.25, pp. 47-51); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§9.3, Prop. 9.16, Teor. 9.18, Cor. 9.19; §9.4: teorema di Brouwer con un'idea della dimostrazione, teorema della curva di Jordan solo enunciato).

## Prerequisiti
- [[Spazio connesso]]: la connessione per archi la implica
- [[Funzione continua tra spazi topologici]]: un arco è una funzione continua da [0,1]

## Porta a
- [[Spazio proiettivo reale]]: connesso per archi come immagine della sfera

## Collegati
- [[Prodotto di spazi connessi]]: stessa struttura per i prodotti
- [[Topologia del piano complesso]]: insiemi connessi per poligonali
- [[Insieme convesso]]: i convessi sono connessi per archi
- [[Curve parametriche]]: un arco è una curva continua
- [[Insieme semplicemente connesso]]: nozione più forte usata in analisi 2 per le forme differenziali

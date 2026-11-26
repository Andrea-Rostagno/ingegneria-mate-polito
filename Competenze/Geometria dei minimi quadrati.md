---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["geometry of least squares", "interpretazione geometrica dei minimi quadrati", "valori interpolati", "fitted values", "residui ortogonali", "scomposizione della variabilità", "TSS = ESS + RSS", "teorema di Pitagora nel modello lineare"]
tags: [competenza, area/statistica]
---

# Geometria dei minimi quadrati

> I valori interpolati $\hat{\mathbf Y}$ sono la proiezione ortogonale di $\mathbf Y$ sullo spazio generato dalle colonne della matrice di disegno, i residui la proiezione sul complemento ortogonale: da qui ortogonalità, residui a somma zero, Pitagora e $R^2$.

## Definizione / enunciato
Sia $\operatorname{rank}(\mathbf X)=p$ e $\Omega=\operatorname{span}(\mathbf X)$ (libro, cap. 9, Prop. 9.9):
1. $\mathbf P=\mathbf X(\mathbf X'\mathbf X)^{-1}\mathbf X'$ è simmetrica e idempotente, proietta ortogonalmente su $\Omega$, $\mathbf P\mathbf X=\mathbf X$, $\operatorname{tr}\mathbf P=p$;
2. $\mathbf I-\mathbf P$ proietta su $\Omega^\perp$ (dimensione $n-p$), $\hat{\boldsymbol\varepsilon}=(\mathbf I-\mathbf P)\mathbf Y$, $(\mathbf I-\mathbf P)\mathbf X=\mathbf 0$;
3. $\hat{\mathbf Y}'\hat{\boldsymbol\varepsilon}=0$ e $\mathbf X'\hat{\boldsymbol\varepsilon}=\mathbf 0$ (equazioni normali);
4. con l'intercetta $\sum_i\hat\varepsilon_i=0$ e la media dei valori interpolati è $\bar Y$;
5. Pitagora $\|\mathbf Y\|^2=\|\hat{\mathbf Y}\|^2+\mathrm{RSS}$ e, con l'intercetta, $\sum(Y_i-\bar Y)^2=\sum(\hat Y_i-\bar Y)^2+\sum(Y_i-\hat Y_i)^2$.

## Formule chiave
$\hat{\mathbf Y}=\mathbf P\mathbf Y=\mathbf X\hat{\boldsymbol\beta}$ con $\hat{\boldsymbol\beta}=(\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf Y$; $R^2=\sum(\hat Y_i-\bar Y)^2/\sum(Y_i-\bar Y)^2$ è il quadrato del coseno dell'angolo tra i vettori centrati $\mathbf Y-\bar Y\mathbf 1$ e $\hat{\mathbf Y}-\bar Y\mathbf 1$.

## Intuizione
Minimizzare $\|\mathbf Y-\mathbf X\boldsymbol\beta\|^2$ significa cercare il punto di $\Omega$ più vicino a $\mathbf Y$: è il piede della perpendicolare. Il vettore degli errori veri $\boldsymbol\varepsilon=\mathbf Y-\mathbf X\boldsymbol\beta$ non è ortogonale a $\Omega$; quello dei residui sì.

## Come si usa
Regressione semplice con sette punti (libro, Es. `c09-sette-punti`): retta $\hat y=1.143+0.582x$, residui come segmenti verticali; $\hat\sigma^2_{\mathrm{ML}}=\sum e_i^2/7$ contro $S^2=\sum e_i^2/(7-2)$ (RMS del docente). La geometria spiega perché $E(\mathrm{RSS})=(n-p)\sigma^2$: i residui vivono in uno spazio di dimensione $n-p$. Calcolo a mano: con $x=(0,1,2,3)'$ e $\mathbf y=(1,3,2,4)'$ si costruiscono $\mathbf X'\mathbf X$, $\hat{\boldsymbol\beta}$, $\hat{\mathbf Y}$ e si verificano i punti 3-4 (Es. `c09-quattro-punti`).

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 9, §9.4 (Prop. 9.9, p. 153). Fonti: `Libri/Modelli statistici/capitoli/cap09.tex`; `magistrale/Modelli statistici/251112 Stima e distribuzioni nel modello lineare.pdf`; `magistrale/Modelli statistici/PDF corretti/251112.pdf`.

## Prerequisiti
- [[Regressione lineare]]: modello e stimatore
- [[Matrice di proiezione]]: proprietà di $\mathbf P$ e $\mathbf I-\mathbf P$
- [[Proiezione ortogonale di un vettore]]: interpretazione geometrica

## Porta a
- [[Coefficiente di determinazione]]: $R^2$ come coseno al quadrato
- [[Confronto di modelli annidati]]: Pitagora tra modello grande e piccolo
- [[Teorema di Frisch-Waugh-Lovell]]: proiezioni su blocchi di colonne
- [[Leva e distanza di Cook]]: diagonale di $\mathbf P$

## Collegati
- [[Problema dei minimi quadrati]]: stesse equazioni normali in algebra lineare
- [[Teorema della proiezione]]: versione negli spazi di Hilbert

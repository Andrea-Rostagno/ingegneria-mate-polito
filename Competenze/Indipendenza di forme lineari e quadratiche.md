---
tipo: competenza
area: probabilita
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["independence of linear and quadratic forms", "indipendenza di forme lineari", "indipendenza di forme quadratiche", "forme quadratiche di normali", "quadratic forms of normal vectors", "AΣB'=0", "AB=0"]
tags: [competenza, area/probabilita]
---

# Indipendenza di forme lineari e quadratiche

> Criteri matriciali per stabilire quando due trasformazioni lineari, o due forme quadratiche, di un vettore normale sono indipendenti: è lo strumento che dà l'indipendenza di stimatori e residui nel modello lineare.

## Definizione / enunciato
- **Forme lineari** (libro, cap. 8, Teorema 8.1): se $\mathbf X\sim N_m(\boldsymbol\mu,\Sigma)$,
$$\mathbf A\mathbf X\perp\mathbf B\mathbf X\iff\mathbf A\Sigma\mathbf B'=\mathbf 0_{p\times q};$$
con $\Sigma=\sigma^2\mathbf I_m$ la condizione è $\mathbf A\mathbf B'=\mathbf 0$ (righe di $\mathbf A$ ortogonali a quelle di $\mathbf B$).
- **Forme quadratiche** (Teorema 8.9): se $\mathbf X\sim N_n(\boldsymbol\mu,\sigma^2\mathbf I_n)$ e $\mathbf A,\mathbf B$ sono simmetriche $n\times n$ con $\mathbf A\mathbf B=\mathbf 0$, allora $\mathbf A\mathbf X\perp\mathbf B\mathbf X$ e $\mathbf X'\mathbf A\mathbf X\perp\mathbf X'\mathbf B\mathbf X$.

## Formule chiave
$\operatorname{Cov}(\mathbf A\mathbf X,\mathbf B\mathbf X)=\mathbf A\Sigma\mathbf B'$; il vettore $(\mathbf A\mathbf X,\mathbf B\mathbf X)$ è congiuntamente normale, quindi covarianza nulla equivale a indipendenza. Per le quadratiche: con $\mathbf A,\mathbf B$ simmetriche, $\mathbf X'\mathbf A\mathbf X$ è funzione di $\mathbf A\mathbf X$ quando $\mathbf A$ è una proiezione ($\mathbf X'\mathbf A\mathbf X=\|\mathbf A\mathbf X\|^2$).

## Intuizione
Per vettori normali "scorrelato" significa "indipendente"; la verifica si riduce a un prodotto di matrici. Funzioni di pezzi indipendenti restano indipendenti.

## Come si usa
**La media e gli scarti** (libro, Es. `c08-media-scarti`): $\mathbf X\sim N_n(\mu\mathbf 1,\sigma^2\mathbf I)$, $\bar X=\frac1n\mathbf 1'\mathbf X$ e $\mathbf X-\bar X\mathbf 1=(\mathbf I-\frac1n\mathbf 1\mathbf 1')\mathbf X$; poiché $\frac1n\mathbf 1'(\mathbf I-\frac1n\mathbf 1\mathbf 1')=\mathbf 0$, la media è indipendente dal vettore degli scarti e quindi da $S^2$. Nel modello lineare $\hat{\boldsymbol\beta}$ è funzione di $\mathbf P\mathbf Y$ e i residui sono $(\mathbf I-\mathbf P)\mathbf Y$, con $\mathbf P(\mathbf I-\mathbf P)=\mathbf 0$. Esercizio del libro: la versione con $\Sigma\ne\sigma^2\mathbf I$ si riconduce a questa con $\mathbf Z=\Sigma^{-1/2}\mathbf X$.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 8, §8.1 e §8.4 (Teoremi 8.1 e 8.9, pp. 127-132). Fonti: `Libri/Modelli statistici/capitoli/cap08.tex`; `magistrale/Modelli statistici/251105 Quadratiche e lineari di normali.pdf`; `magistrale/Modelli statistici/PDF corretti/251105.pdf`.

## Prerequisiti
- [[Vettore gaussiano]]: incorrelazione equivale a indipendenza
- [[Matrice di covarianza]]: $\operatorname{Cov}(\mathbf A\mathbf X,\mathbf B\mathbf X)=\mathbf A\Sigma\mathbf B'$

## Porta a
- [[Teorema di Cochran]]: proiezioni ortogonali danno chi-quadro indipendenti
- [[Media e varianza campionaria nel caso normale]]: $\bar X\perp S^2$
- [[Inferenza sui coefficienti di regressione]]: $\hat{\boldsymbol\beta}$ indipendente dai residui

## Collegati
- [[Matrice di proiezione]]: $\mathbf P$ e $\mathbf I-\mathbf P$ soddisfano $\mathbf P(\mathbf I-\mathbf P)=\mathbf 0$
- [[Forma quadratica]]: $\mathbf x'\mathbf A\mathbf x$ nel senso dell'algebra lineare

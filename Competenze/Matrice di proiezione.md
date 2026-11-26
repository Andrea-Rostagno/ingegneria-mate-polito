---
tipo: competenza
area: algebra-geometria
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["projection matrix", "matrice di proiezione ortogonale", "matrice idempotente", "idempotent matrix", "matrice cappello", "hat matrix", "rango uguale alla traccia"]
tags: [competenza, area/algebra-geometria]
---

# Matrice di proiezione

> Matrice simmetrica e idempotente: proietta ortogonalmente su un sottospazio, ha autovalori 0 e 1 e rango uguale alla traccia. Nel modello lineare è la matrice cappello $\mathbf P=\mathbf X(\mathbf X'\mathbf X)^{-1}\mathbf X'$.

## Definizione / enunciato
$\mathbf P$ ($n\times n$) è una **matrice di proiezione** (ortogonale) se $\mathbf P'=\mathbf P$ e $\mathbf P^2=\mathbf P$ (libro, cap. 8, Def. 8.10). Se ha rango $r$ (Prop. 8.11):
1. gli autovalori sono 1 (molteplicità $r$) e 0 (molteplicità $n-r$);
2. esiste $\mathbf T$ ortogonale con $\mathbf T'\mathbf P\mathbf T=\boldsymbol\Lambda=\begin{pmatrix}\mathbf I_r&\mathbf 0\\\mathbf 0&\mathbf 0\end{pmatrix}$, $\mathbf P=\mathbf T\boldsymbol\Lambda\mathbf T'$;
3. $\operatorname{rank}\mathbf P=\operatorname{tr}\mathbf P$;
4. $\mathbf I-\mathbf P$ è una proiezione di rango $n-r$.

## Formule chiave
Se $\mathbf X$ è $n\times p$ di rango $p$, $\mathbf P=\mathbf X(\mathbf X'\mathbf X)^{-1}\mathbf X'$ è simmetrica, $\mathbf P^2=\mathbf P$ e $\operatorname{tr}\mathbf P=\operatorname{tr}((\mathbf X'\mathbf X)^{-1}\mathbf X'\mathbf X)=\operatorname{tr}\mathbf I_p=p$ (Es. `c08-proiezione-modello`). Teorema di Pitagora: $\|\mathbf x\|^2=\|\mathbf P\mathbf x\|^2+\|(\mathbf I-\mathbf P)\mathbf x\|^2$.

## Intuizione
Se $\mathbf P\mathbf x$ è già nel sottospazio, proiettarlo di nuovo non cambia nulla ($\mathbf P^2=\mathbf P$); la simmetria rende la proiezione ortogonale. Gli autovalori 0/1 dicono quali direzioni sono conservate e quali annullate, e la traccia le conta.

## Come si usa
Esempio a mano (libro, Es. `c08-proiezione-3x2`): $\mathbf X$ con righe $(1,0),(1,1),(1,2)$ e $\mathbf y=(1,2,4)'$; $\mathbf X'\mathbf X=\begin{pmatrix}3&3\\3&5\end{pmatrix}$ con inversa $\frac16\begin{pmatrix}5&-3\\-3&3\end{pmatrix}$, da cui $\mathbf P$, i valori interpolati $\mathbf P\mathbf y$ e i residui $(\mathbf I-\mathbf P)\mathbf y$, ortogonali. Esercizio: verificare che una matrice data è di proiezione e trovarne il rango come traccia. Nel modello lineare la diagonale di $\mathbf P$ dà le leve.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 8, §8.5 (Def. 8.10, Prop. 8.11, pp. 132-133) e appendice A (proiezioni ortogonali, teorema spettrale). Fonti: `Libri/Modelli statistici/capitoli/cap08.tex`, `appA.tex`; `magistrale/Modelli statistici/PDF corretti/251105.pdf`.

## Prerequisiti
- [[Proiezione ortogonale di un vettore]]: l'operazione geometrica rappresentata
- [[Endomorfismo simmetrico]]: teorema spettrale per la diagonalizzazione ortogonale

## Porta a
- [[Teorema di Cochran]]: forme quadratiche di proiezioni
- [[Geometria dei minimi quadrati]]: $\hat{\mathbf Y}=\mathbf P\mathbf Y$
- [[Leva e distanza di Cook]]: $h_{ii}=[\mathbf P]_{ii}$

## Collegati
- [[Indipendenza di forme lineari e quadratiche]]: $\mathbf P(\mathbf I-\mathbf P)=\mathbf 0$
- [[Problema dei minimi quadrati]]: le equazioni normali in algebra lineare

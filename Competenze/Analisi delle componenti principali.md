---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["principal component analysis", "componenti principali", "principal components", "PCA lineare", "loadings", "loading vector", "scores", "score graph", "loading graph", "biplot", "matrice di dispersione", "scatter matrix", "eigenfaces", "autoencoder lineare"]
tags: [competenza, area/data-ml]
---

# Analisi delle componenti principali

> Riduzione lineare della dimensione che proietta i dati sul sottospazio generato dagli autovettori principali della matrice di dispersione: massimizza la varianza conservata e minimizza l'errore di ricostruzione.

## Definizione / enunciato
**Come autoencoder lineare.** Dati centrati $S=\{p_1,\dots,p_m\}\subset\mathbb R^d$, codifica $U\in\mathbb R^{e\times d}$ e decodifica $V\in\mathbb R^{d\times e}$, $e<d$:
$$\arg\min_{U\in\mathbb R^{e,d},\,V\in\mathbb R^{d,e}}\ \sum_{i=1}^m\|p_i-VUp_i\|_2^2 .$$
**Teorema.** Sia $A=\sum_{i=1}^mp_ip_i^T=X^TX$ (**matrice di dispersione**; $X$ matrice dei dati, una riga per campione) con autovalori $\lambda_1\ge\dots\ge\lambda_d\ge0$ e autovettori ortonormali $v_1,\dots,v_d$. La soluzione è
$$V=V_e=[v_1|\dots|v_e],\qquad U=V^T .$$
$A$ è simmetrica e semidefinita positiva ($v^TAv=\|Xv\|^2\ge0$), quindi $A=V\Lambda V^T$ con $V^TV=I$.

## Formule chiave
- Con $U=V_e^T$: $\|x-V_eV_e^Tx\|^2=\|x\|^2-\mathrm{tr}(V_e^Txx^TV_e)$, quindi il problema diventa $\arg\max_{U^TU=I}\mathrm{tr}\big(U^TAU\big)$; $V_eV_e^Tx$ è la **proiezione ortogonale** di $x$ sul sottospazio $\mathrm{Im}(V_e)$ e l'errore minimo vale $\sum_{i=e+1}^d\lambda_i$.
- **Come massima varianza:** se $\bar\mu_X=0$, $\frac1mA=\Sigma_X$. La prima componente $pc_1=Xa_1$ risolve $\max a_1^TAa_1$ con $a_1^Ta_1=1$; la lagrangiana $\mathcal L=a_1^TAa_1-\lambda(a_1^Ta_1-1)$ dà $Aa_1=\lambda a_1$ e $a_1^TAa_1=\lambda$, quindi $a_1=v_1$, $\lambda=\lambda_1$. La seconda aggiunge il vincolo $a_2^TApc_1=0$ (scorrelata dalla prima) e dà $v_2$.
- Notazione ISLR: $z_{i1}=\phi_{11}x_{i1}+\dots+\phi_{p1}x_{ip}$, $\max\frac1n\sum_i\big(\sum_j\phi_{j1}x_{ij}\big)^2$ s.t. $\sum_j\phi_{j1}^2=1$; $\phi_1$ è il **vettore dei loadings**, gli $z_{i1}$ gli **scores**.

## Intuizione
Le direzioni lungo cui i dati variano di più sono gli autovettori della covarianza; tenendo le prime $e$ si perde solo la varianza delle ultime. Equivalentemente, il piano delle prime componenti è il sottospazio affine più vicino ai dati in distanza quadratica media.

## Come si usa
Si centrano (o standardizzano, se le unità sono diverse: PCA su $\mathrm{Corr}(X)$) i dati, si diagonalizza $A$ o si usa la SVD di $X$, si sceglie $e$ con la varianza spiegata. Esempi: USArrests (loadings di Murder, Assault, UrbanPop, Rape), score graph, loading graph e biplot (`PCAintro.ipynb`, dataset iris e wine); **eigenfaces**, cioè le componenti viste come immagini nel riconoscimento facciale; PCA prima di SVM e MLP nei laboratori.

## Nei corsi
- **Matematica per l'AI** (triennale): appunti a mano (autoencoder, teorema, derivazione lagrangiana) e slide ISLR annotate. Fonti: `triennale/ANNO 3/matematica AI/PCA.pdf` (p. 1-23, 30-44); `FML.pdf` §15.1; esempi di codice `PCAintro.ipynb`, `DimRedFaces.ipynb`.
- **Data science lab** (magistrale): solo l'idea ("trova le direzioni dello spazio in cui i dati hanno più varianza") e l'uso in scikit-learn: `pca = PCA(n_components=5)`, `pca.fit_transform(X)` (con `n_components` minore o uguale al numero di feature), poi `pca.transform(X_test)` senza riadattare sul test; nessuna derivazione algebrica. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 38); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 15-19). Il confronto con la compressione non lineare è in [[Autoencoder]].

## Prerequisiti
- [[Matrice di covarianza]]: $\frac1mX^TX$ per dati centrati
- [[Matrice diagonalizzabile]]: teorema spettrale per $A$ simmetrica
- [[Moltiplicatori di Lagrange]]: derivazione della prima componente

## Porta a
- [[Varianza spiegata]]: scelta del numero di componenti

## Collegati
- [[Decomposizione ai valori singolari]]: il calcolo pratico passa per la SVD di $X$
- [[Proiezione ortogonale di un vettore]]: $V_eV_e^Tx$ è la proiezione sul sottospazio principale
- [[Riduzione della dimensionalità]]: il metodo lineare di base
- [[Rete neurale artificiale]]: la PCA è un autoencoder lineare a un livello nascosto
- [[Normalizzazione degli attributi]]: standardizzare prima della PCA se le unità differiscono

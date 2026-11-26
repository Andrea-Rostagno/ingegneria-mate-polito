---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["axioms of quantum theory", "assiomi della teoria quantistica", "postulates of quantum mechanics", "postulati della MQ"]
tags: [competenza, area/fisica]
---

# Postulati della meccanica quantistica

> I cinque assiomi su cui la dispensa fonda la teoria: stati come funzioni d'onda, osservabili come operatori hermitiani, valori medi, evoluzione di Schrödinger, collasso dopo la misura.

## Definizione / enunciato
Enunciato della dispensa (`2022_QP.pdf` p. 76):
1. Gli stati fisici sono descritti da funzioni d'onda $\Psi(\vec x)\in\mathbb C$; $|\Psi(\vec x)|^2$ è la densità di probabilità di trovare la particella in $\vec x$ al tempo $t$.
2. Le osservabili fisiche sono rappresentate da **operatori hermitiani**.
3. Il valore atteso dell'osservabile $A$ è $\langle A\rangle=(\psi,A\psi)=\int d^3x\,\psi^*A\psi$.
4. L'evoluzione temporale degli stati è governata dall'equazione di Schrödinger.
5. Una misura di $A$ che seleziona il valore $\lambda$ (nello spettro di $A$) fa passare la funzione d'onda nell'autofunzione corrispondente $\Psi_\lambda$.

## Formule chiave
Teoremi sugli operatori hermitiani che rendono coerente l'impianto:
$$A\psi_m=\alpha_m\psi_m\Rightarrow\alpha_m=\alpha_m^*,\qquad (\alpha_m-\alpha_n)(\psi_n,\psi_m)=0$$
Spettro discreto: $\psi=\sum_nf_n\psi_n$, $f_n=(\psi_n,\psi)$, $\sum_n|f_n|^2=1$, $\langle A\rangle=\sum_m\alpha_m|f_m|^2$.
Spettro continuo: $\psi=\int_Dd\lambda f(\lambda)\psi_\lambda$, $(\psi_\eta,\psi_\lambda)=\delta(\eta-\lambda)$, $\langle A\rangle=\int_Dd\lambda\,\lambda|f(\lambda)|^2$.

## Intuizione
Le misure danno numeri reali, quindi gli operatori devono essere hermitiani; la completezza degli autostati (teorema spettrale) assicura che ogni stato si possa sviluppare su di essi e che $|f_n|^2$ sia una probabilità.

## Come si usa
Nel caso degenere gli autostati con lo stesso autovalore formano una matrice di sovrapposizione hermitiana $C_{nm}=(\psi_n,\psi_m)$, che si diagonalizza con una matrice unitaria $U^+CU=\Lambda$ ottenendo un insieme ortonormale (`2022_QP.pdf` pp. 71-72). In QM_notes il postulato di misura è illustrato con un esempio di sviluppo su autostati e probabilità $|\langle f_i|\psi\rangle|^2$ (`QM_notes3.pdf` pp. 24-27).

## Nei corsi
- **Quantum physics** (triennale): §6 e §6.2 della dispensa di V. Penna; §2.2-2.3 delle note di M. Re Fiorentin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 69-76); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 19-27).

## Prerequisiti
- [[Spazio di Hilbert]]: gli stati sono vettori di L²
- [[Operatori quantistici]]: le osservabili sono operatori hermitiani
- [[Equazione di Schrödinger]]: assioma dell'evoluzione

## Porta a
- [[Misura in meccanica quantistica]]: contenuto operativo del quinto assioma
- [[Notazione di Dirac]]: riformulazione astratta degli stessi assiomi

## Collegati
- [[Endomorfismo simmetrico]]: autovalori reali e autovettori ortogonali, come per le matrici simmetriche
- [[Matrice diagonalizzabile]]: diagonalizzazione unitaria nel caso degenere
- [[Ampiezza di probabilità]]: primo assioma, interpretazione di Born

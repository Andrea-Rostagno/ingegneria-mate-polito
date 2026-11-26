---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["quantum operators", "valor medio quantistico", "expectation value", "operatore impulso", "momentum operator", "operatore hermitiano", "hermitian operator", "hamiltoniano", "Hamiltonian", "operatore momento angolare"]
tags: [competenza, area/fisica]
---

# Operatori quantistici

> A ogni grandezza fisica classica si associa un operatore lineare hermitiano che agisce sulla funzione d'onda; il valor medio della grandezza si ottiene "inserendo" l'operatore tra $\Psi^*$ e $\Psi$.

## Definizione / enunciato
Il valor medio della posizione è la media delle misure, che per infinite misure diventa un integrale pesato con $|\Psi|^2$. Per l'impulso si parte da $\langle\vec p\rangle=m\,d\langle\vec r\rangle/dt$, si usano l'equazione di Schrödinger e la sua coniugata e si integra due volte per parti: compare $-i\hbar\,d/dx$. In generale l'operatore di $F(\vec r,\vec p,t)$ si costruisce con le sostituzioni $\vec r\to\hat{\vec r}$, $\vec p\to-i\hbar\nabla$. Gli operatori fisici sono **lineari** e **autoaggiunti (hermitiani)**, condizione necessaria perché il valor medio sia reale.

## Formule chiave
$$\langle\vec r\rangle=\int_\Omega\vec r\,|\Psi(\vec r,t)|^2d\vec r,\qquad \langle p_x\rangle=\int_\Omega\Psi^*\left(-i\hbar\frac{d}{dx}\right)\Psi\,dx$$
$$\hat F=F(\hat r,-i\hbar\nabla,t),\qquad \langle F\rangle=\langle\Psi|\hat F|\Psi\rangle=\int_\Omega\Psi^*(\vec r,t)\,\hat F\,\Psi(\vec r,t)\,d\vec r$$
$$\int_\Omega\Psi^*(\hat F\Psi)d\vec r=\int_\Omega(\hat F\Psi)^*\Psi\,d\vec r\ \Rightarrow\ \langle\Psi|\hat F|\Psi\rangle\in R$$
Catalogo: $\hat{\vec p}=-i\hbar\nabla$, $\hat{\vec k}=-i\nabla$, $\hat T=-\frac{\hbar^2}{2m}\Delta$,
$$\hat H=\frac{\hat p^2}{2m}+V(\vec r)=-\frac{\hbar^2}{2m}\Delta+V(\vec r),\qquad i\hbar\frac{\partial\Psi}{\partial t}=\hat H\Psi$$
$$\hat{\vec L}=\vec r\times(-i\hbar\nabla),\quad \hat L_z=-i\hbar\left(x\frac{\partial}{\partial y}-y\frac{\partial}{\partial x}\right)$$

## Intuizione
La traiettoria classica è sostituita da una distribuzione di probabilità: le grandezze diventano "medie su $|\Psi|^2$". Per la posizione basta moltiplicare, per l'impulso serve una derivata, perché l'impulso è legato alla lunghezza d'onda (de Broglie).

## Come si usa
Si scrive la grandezza classica e si sostituiscono gli operatori: per l'energia di una massa in un potenziale, $H=\frac{p^2}{2m}+V$ diventa $-\frac{\hbar^2}{2m}\Delta+V$, e l'equazione di Schrödinger si riscrive $i\hbar\,\partial_t\Psi=\hat H\Psi$ (`52. LEZIONE.pdf` pp. 32-33).

## Nei corsi
- **Fisica 2** (triennale): lezioni 52 (valor medio di posizione e impulso, dimostrazione completa), 55-56 (proprietà degli operatori), 57-58 (catalogo con le componenti di $\hat L$). Fonti: `triennale/ANNO 2/fisica 2/lezioni/52. LEZIONE.pdf` (pp. 19-33); `triennale/ANNO 2/fisica 2/lezioni/55&56. LEZIONE.pdf` (pp. 6-11); `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (pp. 1-2).
- **Quantum physics** (triennale): §4.3 e cap. 6 della dispensa di V. Penna. Operatori di moltiplicazione ($\hat x$, $f(\hat x)$) e differenziali ($\hat p=-i\hbar\nabla$, $\hat T$, $\hat L=\hat x\wedge\hat p$); proprietà lineari; **operatore aggiunto** definito da $(\phi,A\psi)=(A^+\phi,\psi)$, con $(AB)^+=B^+A^+$; hermitiano se $A=A^+$. Verifica dell'hermiticità di $x_i$, $f(\vec x)$, $\hat p_3$ (integrazione per parti) e di $H$. Teoremi: autovalori reali, autofunzioni di autovalori diversi ortogonali, completezza (teorema spettrale), $\langle A\rangle=\sum_m\alpha_m|f_m|^2$. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 38-42, 51, 69-76); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 19-24).

## Prerequisiti
- [[Ampiezza di probabilità]]: il valor medio pesa con |Ψ|²
- [[Quantizzazione canonica]]: regola che associa operatori alle variabili canoniche (Quantum physics)

## Porta a
- [[Misura in meccanica quantistica]]: si misurano gli autovalori dell'operatore
- [[Rotore rigido quantistico]]: H = L²/2I con l'operatore momento angolare

## Collegati
- [[Endomorfismo simmetrico]]: gli operatori hermitiani sono l'analogo degli autoaggiunti: autovalori reali
- [[Postulati della meccanica quantistica]]: le osservabili sono operatori hermitiani (Quantum physics)
- [[Teorema di Ehrenfest]]: l'hermiticità di H governa l'evoluzione dei valori medi (Quantum physics)

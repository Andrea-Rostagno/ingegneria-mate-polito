---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["quantum rigid rotor", "funzioni sferiche", "spherical harmonics", "armoniche sferiche", "livelli rotazionali", "degenerazione 2l+1"]
tags: [competenza, area/fisica]
---

# Rotore rigido quantistico

> Una massa che ruota a distanza fissa da un punto ha hamiltoniano $\hat L^2/2I$: modulo e orientazione del momento angolare sono quantizzati, e l'energia vale $\frac{\hbar^2}{2I}l(l+1)$.

## Definizione / enunciato
Classicamente $E=\frac12\frac{L^2}{I}$ con $I$ momento d'inerzia rispetto all'asse. Quantisticamente l'equazione di Schrödinger stazionaria diventa l'equazione agli autovalori di $\hat L^2$, scritto in coordinate polari. Le soluzioni sono le funzioni sferiche (legate alle funzioni associate di Legendre), caratterizzate da $l$ e $m$. Fissato $l$, $L_z$ può assumere solo $2l+1$ valori: il livello $E_l$ è $(2l+1)$ volte degenere.

## Formule chiave
$$\hat H\Psi=\frac12\frac{\hat L^2}{I}\Psi=E\Psi,\qquad \hat L^2\Psi=2IE\Psi=\lambda\Psi$$
$$-\hbar^2\left\{\frac{\partial^2}{\partial\theta^2}+ctg\theta\frac{\partial}{\partial\theta}+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\varphi^2}\right\}\Psi=\lambda\Psi$$
$$\Psi_{ml}(\theta,\varphi)=N_{lm}P_m^l(\cos\theta)e^{im\varphi},\qquad \lambda=\hbar^2l(l+1),\quad l=0,1,2,\dots,\ -l\le m\le l$$
$$\hat L^2\Psi_{ml}=\hbar^2l(l+1)\Psi_{ml},\qquad \hat L_z\Psi_{ml}=m\hbar\Psi_{ml}$$
$$E_l=\frac{\hbar^2}{2I}l(l+1),\qquad E_l-E_{l-1}=l\hbar^2/I,\qquad g(E_l)=2l+1,\qquad \nu=(E_l-E_{l-1})/h$$

## Intuizione
Il momento angolare non solo ha intensità quantizzata ($\hbar\sqrt{l(l+1)}$), ma può orientarsi rispetto all'asse $z$ solo in $2l+1$ modi ($m_l\hbar$). I salti tra livelli crescono con $l$, quindi lo spettro rotazionale assorbito o emesso è fatto di righe.

## Come si usa
Modello delle rotazioni molecolari e dell'assorbimento e.m. tra livelli rotazionali consecutivi. Esempio scritto a mano (`57&58. LEZIONE.pdf` p. 16): per H₂ con $d=1$ Å, $I=2m_p(d/2)^2=0,8\cdot10^{-47}$ kg m², $E=l(l+1)\,0,68\cdot10^{-21}$ J; la transizione $l=0\to1$ dà $\lambda=1,4\cdot10^{-4}$ m. Nel calore specifico di H₂ la slide usa invece $I=M(d/2)^2=6,7\cdot10^{-48}$ kg m² con $d=0,09$ nm (p. 40): i due valori del corso non coincidono. L'esercizio a p. 15 non è usato.

## Nei corsi
- **Fisica 2** (triennale): lezioni 57-58; le pp. 11-14 (livelli, orientazioni per $l=2$, emissione e assorbimento) sono slide solo immagine, p. 16 è scritta a mano. Fonti: `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (pp. 4-16).
- **Quantum physics** (triennale): §9.2 della dispensa di V. Penna. In coordinate sferiche $L_3=-i\hbar\partial_\varphi$, $L_\pm=\hbar e^{\pm i\varphi}(\pm\partial_\theta+i\cot\theta\,\partial_\varphi)$, $L^2=-\hbar^2\left[\frac{1}{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta)+\frac{1}{\sin^2\theta}\partial_\varphi^2\right]$; separando $Y_{\ell m}=\Phi_m(\varphi)F_{\ell m}(\theta)$ si ha $\Phi_m=e^{im\varphi}/\sqrt{2\pi}$ e $F_{\ell m}=P_\ell^m(\cos\theta)$ (funzioni associate di Legendre). La richiesta che $\Phi_m$ sia a un sol valore esclude $\ell$ semintero. Ortonormalità e completezza su $L^2(S^2)$, tabelle di $Y_{0,0}$, $Y_{1,m}$, $Y_{2,m}$, orbitali s, p, d, f. **Molecola biatomica**: $H=L^2/2I$, $E_\ell=\frac{\hbar^2\ell(\ell+1)}{2I}$ con degenerazione $2\ell+1$; aggiungendo il centro di massa, $E=\frac{\hbar^2K^2}{2M}+\frac{\hbar^2\ell(\ell+1)}{2I}$. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 103-109); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 42-46).

## Prerequisiti
- [[Operatori quantistici]]: H = L²/2I con l'operatore momento angolare
- [[Momento d'inerzia]]: energia classica L²/2I
- [[Spettro del momento angolare]]: autovalori di L² e L₃ dall'algebra (Quantum physics)
- [[Coordinate sferiche]]: L² come operatore differenziale su θ e φ (Quantum physics)

## Porta a
- [[Atomo di idrogeno]]: la parte angolare sono le funzioni sferiche
- [[Potenziale centrale quantistico]]: separazione ψ = R(r) Y_ℓm (Quantum physics)

## Collegati
- [[Commutatore di operatori]]: L² e Lz commutano: numeri quantici l e m

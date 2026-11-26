---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["quantum harmonic oscillator", "polinomi di Hermite", "Hermite polynomials", "operatori di creazione e distruzione", "ladder operators", "energia di punto zero", "zero-point energy"]
tags: [competenza, area/fisica]
---

# Oscillatore armonico quantistico

> Una particella in un potenziale elastico $\frac12kx^2$ ha livelli equispaziati $E_n=(n+\frac12)\hbar\omega$: scambia energia solo in quanti $\hbar\omega$ e non sta mai ferma ($E_0=\frac12\hbar\omega$).

## Definizione / enunciato
Hamiltoniano classico $H=\frac{p^2}{2m}+\frac12kx^2$; quantistico $\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12kx^2$. L'equazione agli autovalori si risolve in due modi: (1) con i polinomi di Hermite; (2) con l'algebra degli operatori $\hat a$ (annichilazione) e $\hat a^+$ (creazione), che abbassano o alzano l'energia di $\hbar\omega$.

## Formule chiave
$$-\frac{d^2\Psi}{dx^2}+\left(\frac{m}{\hbar^2}kx^2-\frac{2m}{\hbar^2}E\right)\Psi=0$$
$$\Psi(\xi)=H(\xi)e^{-\frac12\xi^2},\quad \xi=\sqrt{\frac{m\omega}{\hbar}}x,\quad \omega=\sqrt{\frac km},\quad H(\xi)=(-1)^ne^{\xi^2}\frac{d^n}{dx^n}e^{-\xi^2}$$
$$E_n=\left(n+\frac12\right)\hbar\omega,\ n=0,1,2,\dots\qquad \Delta E=E_{n+1}-E_n=\hbar\omega$$
$$\hat a=\frac{1}{\sqrt2}\left(\sqrt{\frac{m\omega}{\hbar}}x+i\sqrt{\frac{1}{m\hbar\omega}}\hat p_x\right),\qquad \hat a^+=\frac{1}{\sqrt2}\left(\sqrt{\frac{m\omega}{\hbar}}x-i\sqrt{\frac{1}{m\hbar\omega}}\hat p_x\right)$$
$$[\hat p_x,x]=\frac{\hbar}{i},\qquad \hat a\hat a^+=\frac{\hat H}{\hbar\omega}+\frac12,\qquad \hat a^+\hat a=\frac{\hat H}{\hbar\omega}-\frac12$$
$$\hat H=\left(\hat a\hat a^+-\frac12\right)\hbar\omega=\left(\hat a^+\hat a+\frac12\right)\hbar\omega$$

## Intuizione
Se $\Psi$ è autofunzione con energia $E$, $\hat a^+\Psi$ lo è con $E+\hbar\omega$ e $\hat a\Psi$ con $E-\hbar\omega$. La scala deve avere un gradino più basso: $\hat a\Psi_0=0$, da cui $\Psi_0=Ae^{-y^2/2}$ con $y=\sqrt{m\omega/\hbar}\,x$ ed $E_0=\frac12\hbar\omega$. Tutti gli altri stati si ottengono applicando $\hat a^+$.

## Come si usa
Modello delle vibrazioni molecolari: in H₂ l'energia vibrazionale è $j\hbar\omega$ e la vibrazione si "attiva" solo a $T\approx1950$ K (`57&58. LEZIONE.pdf` pp. 39-45). Nella slide p. 33 la ricorrenza per $\hat a$ è scritta $E_{n-1}=(E_n+\hbar\omega)$: è un refuso (il testo dice che $\hat a$ fa decrescere l'energia).

## Nei corsi
- **Fisica 2** (triennale): lezioni 57-58, parte indicata come **facoltativa** nella slide di titolo; figura delle funzioni d'onda per $n=0,1,2,3$ a p. 23. Fonti: `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (pp. 20-34).
- **Quantum physics** (triennale): cap. 7 della dispensa di V. Penna, con il "metodo dell'algebra generatrice dello spettro": $a=\frac{1}{\sqrt2}\left(\frac x\lambda+\frac{i\lambda p}{\hbar}\right)$, $\lambda=\sqrt{\hbar/m\omega}$, $[a,a^+]=1$, $H=\hbar\omega(a^+a+\frac12)$; algebra di Weyl-Heisenberg $[a,\hat n]=a$, $[a^+,\hat n]=-a^+$; $a^+\psi_n=\sqrt{n+1}\psi_{n+1}$, $a\psi_n=\sqrt n\psi_{n-1}$, $\psi_n=\frac{(a^+)^n}{\sqrt{n!}}\psi_0$, $\psi_0=Ce^{-x^2/2\lambda^2}$, $\psi_n\propto e^{-x^2/2\lambda^2}H_n(x/\lambda)$; dimostrazione dell'ortogonalità e confronto semiclassico con la densità $\frac{1}{\pi\sqrt{A^2-x^2}}$, $A\simeq\lambda\sqrt{2n}$. Valori medi $\Delta x\Delta p=(2n+1)\hbar/2$. Nelle note di M. Re Fiorentin: via analitica (equazione di Hermite) e via algebrica con la notazione di Dirac. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 77-83, 97, 165-166); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 27-33).

## Prerequisiti
- [[Equazione di Schrödinger]]: potenziale V = kx²/2
- [[Moto armonico semplice]]: versione classica con ω = √(k/m)

## Porta a
- [[Stati coerenti]]: autostati dell'operatore di distruzione a (Quantum physics)
- [[Quantizzazione del campo elettromagnetico]]: ogni modo del campo è un oscillatore (Quantum physics)
- [[Modello di Jaynes-Cummings]]: il modo del campo è descritto da ħω a⁺a (Quantum physics)

## Collegati
- [[Commutatore di operatori]]: algebra degli operatori a e a+
- [[Spettro del momento angolare]]: stesso metodo degli operatori a scala (Quantum physics)
- [[Teoria delle perturbazioni stazionarie]]: esempio dell'oscillatore con molla perturbata (Quantum physics)

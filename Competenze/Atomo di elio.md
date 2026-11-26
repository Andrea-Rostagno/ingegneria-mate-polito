---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["helium atom", "ortoelio", "orthohelium", "paraelio", "parahelium", "integrale di scambio", "exchange integral", "integrale coulombiano", "Coulomb integral", "interazione di scambio", "exchange interaction"]
tags: [competenza, area/fisica]
---

# Atomo di elio

> Due elettroni attorno a un nucleo con $Z=2$: trattando la repulsione $e^2/|\vec r_1-\vec r_2|$ come perturbazione e imponendo l'antisimmetria totale, i livelli si dividono in ortoelio ($E+I_C-I_Q$, spin di tripletto) e paraelio ($E+I_C+I_Q$, spin di singoletto).

## Definizione / enunciato
$$H=\sum_{j=1}^2\left[\frac{p_j^2}{2m_e}-\frac{Ze^2}{|\vec r_j|}\right]+\frac{e^2}{|\vec r_1-\vec r_2|}.$$
$H$ non dipende dallo spin, ma la funzione d'onda totale $\Phi=\chi(1,2)\psi(\vec r_1,\vec r_2)$ deve essere antisimmetrica (elettroni = fermioni). Con gli stati idrogenoidi $u=\psi_{n\ell m}$, $v=\psi_{n'\ell'm'}$:
$$\psi_{s,a}=\frac{1}{\sqrt2}[u(\vec r_1)v(\vec r_2)\pm u(\vec r_2)v(\vec r_1)],\qquad \Phi_1=\chi_{1,\mu}\psi_a,\quad \Phi_2=\chi_{0,0}\psi_s$$
sono gli stati ammessi ($\Phi_3=\chi_{1,\mu}\psi_s$ e $\Phi_4=\chi_{0,0}\psi_a$ sono simmetrici ed esclusi).

## Formule chiave
$$E_{oh}=E_n+E_{n'}+I_C-I_Q,\qquad E_{ph}=E_n+E_{n'}+I_C+I_Q$$
$$I_C=\int d^3x_1d^3x_2\frac{e^2|u(\vec r_1)|^2|v(\vec r_2)|^2}{|\vec r_1-\vec r_2|},\qquad I_Q=\int d^3x_1d^3x_2\,U(\vec r_1,\vec r_2)\,u(\vec r_1)v(\vec r_2)u^*(\vec r_2)v^*(\vec r_1)$$
Modello efficace equivalente: $H\equiv\sum_j\left[\frac{p_j^2}{2m_e}+V(r_j)\right]+I_C-\frac{I_Q}{2}\left(1+\frac{4}{\hbar^2}\vec S_1\cdot\vec S_2\right)$.

## Intuizione
$I_C$ è l'energia elettrostatica classica tra due nuvole di carica; $I_Q$ (scambio) non ha analogo classico e nasce dal termine scambiato in $\psi_a$. Gli elettroni a spin paralleli non possono stare nello stesso stato spaziale: è come una repulsione infinita, e lo spin entra nell'energia pur senza termini di spin in $H$.

## Come si usa
Lo stato fondamentale è il più basso del paraelio, $n=n'=1$, $u=v$, spin opposti nel singoletto, energia $2E_1+I_C+I_Q$, minore del più basso ortoelio $E_1+E_2+I_C-I_Q$; per $u=v$ l'ortoelio si annulla ($\psi_a=0$, principio di Pauli). Poiché $\Phi_1$ e $\Phi_2$ sono degeneri, si verifica che $(\Phi_1,U\Phi_2)=(\chi_{1,\mu},\chi_{0,0})(\psi_a,U\psi_s)=0$ prima di usare le formule non degeneri (`2022_QP.pdf` pp. 177-180).

## Nei corsi
- **Quantum physics** (triennale): §15.3 della dispensa di V. Penna (versione semplificata), in unità di Gauss. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 177-180).

## Prerequisiti
- [[Atomo di idrogeno]]: stati di partenza idrogenoidi con Z = 2
- [[Teorema spin-statistica]]: funzione d'onda totale antisimmetrica
- [[Singoletto e tripletto di spin]]: parte di spin
- [[Teoria delle perturbazioni stazionarie]]: correzione al primo ordine con stati degeneri

## Porta a
- Nessuno.

## Collegati
- [[Configurazione elettronica]]: elio nello stato fondamentale con spin opposti
- [[Particelle identiche]]: due elettroni indistinguibili
